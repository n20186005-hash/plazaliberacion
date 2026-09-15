import type { APIRoute } from 'astro';
import { ATTRACTION } from '../../lib/seo';

export const prerender = false;

/**
 * Endpoint que devuelve el estado del tiempo actual y la previsión de varios
 * días para la plaza. Cache-Control público (30 min) + uso del Cache API del
 * runtime de Cloudflare Workers para deduplicar peticiones dentro del borde.
 *
 * El JSON entregado al cliente NO menciona el proveedor upstream; sólo expone
 * datos agregados pensados para visitantes. Si la consulta externa falla,
 * se devuelve un error 503 con un mensaje neutro.
 */
const CACHE_TTL_SECONDS = 30 * 60; // 30 minutos
const FORECAST_DAYS = 7;

const weatherCodeEs: Record<number, { label: string; emoji: string }> = {
  0: { label: 'Despejado', emoji: '☀️' },
  1: { label: 'Mayormente despejado', emoji: '🌤️' },
  2: { label: 'Parcialmente nublado', emoji: '⛅' },
  3: { label: 'Nublado', emoji: '☁️' },
  45: { label: 'Niebla', emoji: '🌫️' },
  48: { label: 'Niebla escarchante', emoji: '🌫️' },
  51: { label: 'Llovizna ligera', emoji: '🌦️' },
  53: { label: 'Llovizna', emoji: '🌦️' },
  55: { label: 'Llovizna densa', emoji: '🌧️' },
  56: { label: 'Llovizna helada ligera', emoji: '🌧️' },
  57: { label: 'Llovizna helada densa', emoji: '🌧️' },
  61: { label: 'Lluvia ligera', emoji: '🌦️' },
  63: { label: 'Lluvia moderada', emoji: '🌧️' },
  65: { label: 'Lluvia fuerte', emoji: '🌧️' },
  66: { label: 'Lluvia helada ligera', emoji: '🌧️' },
  67: { label: 'Lluvia helada fuerte', emoji: '🌧️' },
  71: { label: 'Nevada ligera', emoji: '🌨️' },
  73: { label: 'Nevada moderada', emoji: '🌨️' },
  75: { label: 'Nevada fuerte', emoji: '❄️' },
  77: { label: 'Granizo fino', emoji: '🌨️' },
  80: { label: 'Chubascos ligeros', emoji: '🌦️' },
  81: { label: 'Chubascos', emoji: '🌧️' },
  82: { label: 'Chubascos fuertes', emoji: '⛈️' },
  85: { label: 'Chubascos de nieve', emoji: '🌨️' },
  86: { label: 'Chubascos de nieve fuertes', emoji: '🌨️' },
  95: { label: 'Tormenta', emoji: '⛈️' },
  96: { label: 'Tormenta con granizo ligero', emoji: '⛈️' },
  99: { label: 'Tormenta con granizo fuerte', emoji: '⛈️' }
};

function describeWeather(code: number) {
  return weatherCodeEs[code] ?? { label: 'Sin datos', emoji: '❔' };
}

// Conversión de km/h a la escala Beaufort (cúca/cúca/cúca/cúca simplificada)
function beaufort(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  return 11;
}

interface DaySummary {
  date: string;
  label: string;
  emoji: string;
  tempMaxC: number | null;
  tempMinC: number | null;
  precipProbPct: number;
  precipMm: number;
  windMaxKmh: number;
  uvMax: number;
  sunrise: string | null;
  sunset: string | null;
  weatherCode: number;
}

interface CurrentSummary {
  temperatureC: number | null;
  apparentTemperatureC: number | null;
  humidityPct: number | null;
  windKmh: number | null;
  windDirDeg: number | null;
  precipitationMm: number;
  isDay: boolean;
  label: string;
  emoji: string;
}

interface AdvicePayload {
  outfit: string[];
  activities: string[];
  items: string[];
  risk: string[];
  summary: string;
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const cache = typeof caches !== 'undefined' ? caches : undefined;
  const cacheKey = new Request(url.toString(), { method: 'GET' });

  if (cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) {
        const headers = new Headers(cached.headers);
        headers.set('X-Cache', 'HIT');
        return new Response(cached.body, { status: cached.status, headers });
      }
    } catch {
      // Ignorar errores de cache y continuar con fetch directo
    }
  }

  const upstream = new URL('https://api.open-meteo.com/v1/forecast');
  upstream.searchParams.set('latitude', ATTRACTION.latitude.toString());
  upstream.searchParams.set('longitude', ATTRACTION.longitude.toString());
  upstream.searchParams.set('timezone', 'America/Mexico_City');
  upstream.searchParams.set('forecast_days', FORECAST_DAYS.toString());
  upstream.searchParams.set(
    'current',
    'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,precipitation'
  );
  upstream.searchParams.set(
    'daily',
    'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,sunrise,sunset,uv_index_max'
  );

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(upstream.toString(), {
      headers: { 'User-Agent': 'plazaliberacion.com (Cloudflare Workers)' }
    });
  } catch {
    return jsonResponse(
      { error: 'upstream_unavailable', message: 'El servicio meteorológico no responde. Inténtalo más tarde.' },
      { status: 503, cacheControl: 'no-store' }
    );
  }

  if (!upstreamResponse.ok) {
    return jsonResponse(
      { error: 'upstream_error', message: 'No se pudo obtener el estado del tiempo.' },
      { status: 502, cacheControl: 'no-store' }
    );
  }

  const raw = (await upstreamResponse.json()) as {
    current?: {
      time?: string;
      temperature_2m?: number;
      relative_humidity_2m?: number;
      apparent_temperature?: number;
      weather_code?: number;
      wind_speed_10m?: number;
      wind_direction_10m?: number;
      precipitation?: number;
      is_day?: number;
    };
    daily?: {
      time?: string[];
      weather_code?: number[];
      temperature_2m_max?: number[];
      temperature_2m_min?: number[];
      precipitation_probability_max?: number[];
      precipitation_sum?: number[];
      wind_speed_10m_max?: number[];
      sunrise?: string[];
      sunset?: string[];
      uv_index_max?: number[];
    };
  };

  const c = raw.current ?? {};
  const code = c.weather_code ?? -1;
  const desc = describeWeather(code);
  const current: CurrentSummary = {
    observedAt: c.time ?? new Date().toISOString(),
    temperatureC: roundNumber(c.temperature_2m),
    apparentTemperatureC: roundNumber(c.apparent_temperature),
    humidityPct: typeof c.relative_humidity_2m === 'number' ? c.relative_humidity_2m : null,
    windKmh: typeof c.wind_speed_10m === 'number' ? roundNumber(c.wind_speed_10m / 10.6 * 10) / 10 : null,
    windDirDeg: c.wind_direction_10m ?? null,
    precipitationMm: roundNumber(c.precipitation ?? 0),
    isDay: c.is_day === 1,
    label: desc.label,
    emoji: desc.emoji
  };

  const d = raw.daily ?? {};
  const days: DaySummary[] = (d.time ?? []).map((iso, i) => {
    const dayCode = d.weather_code?.[i] ?? -1;
    return {
      date: iso,
      label: describeWeather(dayCode).label,
      emoji: describeWeather(dayCode).emoji,
      tempMaxC: roundNumber(d.temperature_2m_max?.[i]),
      tempMinC: roundNumber(d.temperature_2m_min?.[i]),
      precipProbPct: d.precipitation_probability_max?.[i] ?? 0,
      precipMm: roundNumber(d.precipitation_sum?.[i] ?? 0) ?? 0,
      windMaxKmh: typeof d.wind_speed_10m_max?.[i] === 'number'
        ? roundNumber(d.wind_speed_10m_max![i] / 10.6 * 10) / 10
        : 0,
      uvMax: roundNumber(d.uv_index_max?.[i] ?? 0) ?? 0,
      sunrise: d.sunrise?.[i] ?? null,
      sunset: d.sunset?.[i] ?? null,
      weatherCode: dayCode
    };
  });

  const advice = buildAdvice(current, days);

  const payload = {
    location: {
      name: `${ATTRACTION.fullName}, ${ATTRACTION.city}`,
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
      timezone: 'America/Mexico_City'
    },
    current,
    days,
    advice,
    updatedAt: new Date().toISOString()
  };

  return jsonResponse(
    payload,
    { status: 200, cacheControl: `public, max-age=${CACHE_TTL_SECONDS}` },
    cache,
    cacheKey
  );
};

function buildAdvice(current: CurrentSummary, days: DaySummary[]): AdvicePayload {
  const outfit: string[] = [];
  const activities: string[] = [];
  const items: string[] = [];
  const risk: string[] = [];

  const today = days[0];
  const maxPrecipProb = days.length ? Math.max(...days.map((d) => d.precipProbPct)) : 0;
  const maxUv = today?.uvMax ?? 0;
  const todayMax = today?.tempMaxC ?? null;
  const todayMin = today?.tempMinC ?? null;
  const tempDiff = todayMax != null && todayMin != null ? todayMax - todayMin : 0;
  const anyThunder = days.some((d) => d.weatherCode >= 95);
  const anyHeavyRain = days.some((d) => d.precipMm >= 10);
  const currentWindBf = current.windKmh != null ? beaufort(current.windKmh) : 0;
  const maxWindBf = days.length
    ? Math.max(...days.map((d) => beaufort(d.windMaxKmh)))
    : 0;

  // ============ LLUVIA ============
  if (maxPrecipProb >= 60) {
    activities.push(
      'Hay alta probabilidad de lluvia en los próximos días: prioriza recintos cerrados como el Teatro Degollado, la Catedral o el Palacio de Gobierno.'
    );
    items.push('Paraguas compacto o impermeable');
    outfit.push('Calzado con suela antiderrapante; el empedrado del centro se vuelve resbaloso con lluvia.');
  } else if (maxPrecipProb >= 30) {
    items.push('Paraguas compacto (puede llover en algún momento del día)');
  } else if (current.precipitationMm > 0) {
    items.push('Paraguas a la mano: está lloviznando ahora mismo.');
  }

  if (current.precipitationMm >= 5 || anyHeavyRain) {
    items[items.indexOf('Paraguas compacto o impermeable')] =
      'Impermeable o paraguas reforzado (evita paraguas largo si hay viento)';
    activities.push('Lluvia fuerte esperada: reprograma actividades al aire libre para la mañana del día siguiente.');
  }

  if (anyThunder) {
    risk.push('⚠️ Posibles tormentas eléctricas. Evita espacios abiertos y no te resguardes bajo árboles si hay relámpagos.');
  }

  // ============ TEMPERATURA ============
  if (todayMax != null && todayMax >= 32) {
    activities.push('Hace mucho calor: programa la visita antes de las 11:00 o después de las 17:00; evita las horas de mediodía.');
    items.push('Botella de agua reutilizable (hay fuentes cercanas para rellenarla)');
    outfit.push('Ropa ligera, de colores claros y telas transpirables');
  } else if (todayMax != null && todayMax >= 27) {
    items.push('Botella de agua para mantenerte hidratado');
    outfit.push('Ropa ligera y cómoda');
  }

  if (todayMax != null && todayMax <= 10) {
    activities.push('Temperatura baja: dedica menos tiempo a la plaza al aire libre y aprovecha los recintos cerrados.');
    items.push('Bufanda y guantes');
    outfit.push('Ropa de abrigo en capas');
  } else if (tempDiff >= 8) {
    outfit.push('Lleva un suéter o chamarra ligera: la diferencia entre el día y la noche es marcada.');
  }

  // ============ VIENTO ============
  if (currentWindBf >= 7 || maxWindBf >= 7) {
    risk.push('⚠️ Rachas fuertes de viento (≥ 50 km/h): asegura sombreros, lentes y objetos personales.');
    items.push('Evita sombreros que se vuelen con facilidad');
    activities.push('Los conciertos o eventos al aire libre pueden reprogramarse; consulta la cartelera oficial.');
  } else if (currentWindBf >= 5 || maxWindBf >= 5) {
    items.push('El viento puede tirar sombreros y papeles sueltos; opta por gorra con cordón.');
  }

  // ============ RADIACIÓN UV ============
  if (maxUv >= 8) {
    items.push('Protector solar SPF 50+', 'Lentes de sol con filtro UV', 'Sombrero de ala ancha');
    activities.push('Radiación UV muy alta: reduce la exposición solar entre las 12:00 y las 16:00.');
  } else if (maxUv >= 5) {
    items.push('Protector solar SPF 30+', 'Lentes de sol');
  }

  // ============ CONDICIONES GENERALES ============
  if (current.label === 'Despejado' || current.label === 'Mayormente despejado') {
    activities.push('Cielo despejado: ideal para fotografía al amanecer y al atardecer sobre las fachadas del Teatro Degollado.');
  } else if (current.label === 'Parcialmente nublado' || current.label === 'Nublado') {
    activities.push('Cielo nublado: luz suave y sin sombras duras, buena para retratos y arquitectura.');
  }

  if (current.label === 'Niebla' || current.label === 'Niebla escarchante') {
    risk.push('⚠️ Neblina: la visibilidad puede reducirse; las fotografías a distancia perderán contraste.');
    items.push('Mascarilla o bufanda ligera (la humedad se concentra en el ambiente)');
  }

  // ============ HUMEDAD (ciudad) ============
  if (current.humidityPct != null && current.humidityPct >= 70 && (todayMax ?? 0) >= 24) {
    outfit.push('La humedad se siente: lleva ropa de secado rápido y una muda extra.');
  }

  // ============ RESUMEN DE CABECERA ============
  const summary = buildSummary(current, today);

  return { outfit, activities, items, risk, summary };
}

function buildSummary(current: CurrentSummary, today: DaySummary | undefined): string {
  const parts: string[] = [];
  parts.push(current.label);
  if (today?.tempMaxC != null && today?.tempMinC != null) {
    parts.push(`${today.tempMinC.toFixed(0)}–${today.tempMaxC.toFixed(0)} °C`);
  } else if (current.temperatureC != null) {
    parts.push(`${current.temperatureC.toFixed(0)} °C`);
  }
  if (current.windKmh != null && current.windKmh >= 12) {
    parts.push(`viento ${current.windKmh.toFixed(0)} km/h`);
  }
  if (today?.uvMax != null && today.uvMax >= 5) {
    parts.push('UV alto');
  }
  if (today) {
    parts.push(`lluvia ${today.precipProbPct}%`);
  }
  return parts.join(' · ');
}

function roundNumber(value: number | null | undefined, digits = 1): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const m = Math.pow(10, digits);
  return Math.round(value * m) / m;
}

interface JsonResponseOptions {
  status: number;
  cacheControl: string;
}

function jsonResponse(
  payload: unknown,
  options: JsonResponseOptions,
  cache?: CacheStorage,
  cacheKey?: Request
) {
  const body = JSON.stringify(payload);
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': options.cacheControl,
    'X-Content-Type-Options': 'nosniff'
  });
  const response = new Response(body, { status: options.status, headers });

  if (cache && cacheKey && options.status === 200) {
    cache.put(cacheKey, response.clone()).catch(() => {
      /* ignorar fallos de almacenamiento */
    });
  }

  return response;
}