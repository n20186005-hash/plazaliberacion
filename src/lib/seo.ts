/**
 * Constantes y datos del sitio Plaza de la Liberación.
 * Estas variables reemplazan los placeholders {{...}} del brief de SEO.
 *
 * Single source of truth — todos los componentes y datos estructurados
 * consumen estos valores para mantener coherencia entre HTML y JSON-LD.
 */
export const SITE_CONFIG = {
  domain: 'plazaliberacion.com',
  origin: 'https://plazaliberacion.com',
  name: 'Plaza de la Liberación — Visitor Guide',
  locale: 'es_MX',
  language: 'es-MX',
  ogLocale: 'es_MX',
  themeColor: '#7a3a23',
  backgroundColor: '#fff8e6',
  twitterHandle: '@plazaliberacion'
} as const;

export const ATTRACTION = {
  fullName: 'Plaza de la Liberación',
  shortName: 'Plaza Liberación',
  alternateName: [
    'Plaza Liberación',
    'Guadalajara Plaza de la Liberación',
    'Plaza Liberación Guadalajara'
  ],
  city: 'Guadalajara',
  state: 'Jalisco',
  country: 'México',
  countryCode: 'MX',
  postalCode: '44100',
  streetAddress: 'C. Pedro Loza 27A, Zona Centro',
  latitude: 20.6736,
  longitude: -103.3442,
  category: '旅游胜地',
  mapsShareUrl: 'https://maps.app.goo.gl/hcyXC4r12ZbDyAXy7',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Plaza+de+la+Liberaci%C3%B3n,+Guadalajara,+Jalisco,+M%C3%A9xico&hl=es&z=17&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Plaza+de+la+Liberaci%C3%B3n+Guadalajara',
  ratingValue: 4.7,
  reviewCount: 14441,
  reviewsLastSyncISO: '2026-09-15',
  reviewsLastSyncLabel: '2026 年 9 月',
  heroImage: '/images/plaza-hero.svg',
  nearby: {
    landmark1: {
      name: 'Teatro Degollado',
      url: 'https://es.wikipedia.org/wiki/Teatro_Degollado',
      image: '/images/plaza-degollado.svg',
      alt: 'Teatro Degollado junto a Plaza Liberación, Guadalajara'
    },
    landmark2: {
      name: 'Palacio de Gobierno de Jalisco',
      url: 'https://es.wikipedia.org/wiki/Palacio_de_Gobierno_de_Jalisco',
      image: '/images/palacio-gobierno.svg',
      alt: 'Palacio de Gobierno de Jalisco junto a Plaza Liberación'
    }
  },
  govtTourismUrl: 'https://secturjal.jalisco.gob.mx/'
} as const;

export const FAQS = [
  {
    name: '¿Dónde se ubica Plaza de la Liberación?',
    acceptedAnswer:
      'Plaza de la Liberación se ubica en C. Pedro Loza 27A, Zona Centro, C.P. 44100, Guadalajara, Jalisco, México, en pleno corazón histórico de la ciudad.'
  },
  {
    name: '¿La entrada a Plaza de la Liberación es gratuita?',
    acceptedAnswer:
      'Sí. Plaza de la Liberación es un espacio público de acceso libre y gratuito durante todo el año; no se requiere boleto para visitarla.'
  },
  {
    name: '¿Cuál es la calificación de Plaza de la Liberación en Google?',
    acceptedAnswer:
      'Según Google Maps, Plaza de la Liberación mantiene una calificación promedio de 4.7 sobre 5 con más de 14,000 reseñas de visitantes.'
  },
  {
    name: '¿Cómo llegar a Plaza de la Liberación?',
    acceptedAnswer:
      'Se llega fácilmente caminando desde el centro histórico de Guadalajara, a pocos pasos del Teatro Degollado y la Catedral. El sitio es accesible mediante transporte público y cuenta con estacionamientos cercanos.'
  },
  {
    name: '¿Qué se puede ver cerca de Plaza de la Liberación?',
    acceptedAnswer:
      'A pocos metros encontrarás el Teatro Degollado, el Palacio de Gobierno de Jalisco, la Catedral de Guadalajara, la Plaza de Armas y el Paseo Alcalde.'
  },
  {
    name: '¿Cuál es la mejor hora para visitar Plaza de la Liberación?',
    acceptedAnswer:
      'Las primeras horas de la mañana y el atardecer ofrecen la mejor luz para fotografías; los fines de semana suele haber ambiente festivo con música en vivo.'
  },
  {
    name: '¿Por qué se llama Plaza de la Liberación?',
    acceptedAnswer:
      'El nombre conmemora la abolición de la esclavitud en México decretada por Miguel Hidalgo en 1810; en su centro se alza la estatua del prócer de la Independencia.'
  },
  {
    name: '¿Es apta la plaza para personas con movilidad reducida?',
    acceptedAnswer:
      'El recorrido Plaza–Palacio–Catedral se hace por superficies regulares y mayormente planas, aptas para silla de ruedas. Hay bancos cada 50 – 100 metros.'
  },
  {
    name: '¿Hay baños públicos cerca?',
    acceptedAnswer:
      'Sí, existen módulos de sanitarios públicos en el centro histórico (en su mayoría de pago) y sanitarios gratuitos en museos y edificios oficiales cercanos.'
  },
  {
    name: '¿Cuándo es la mejor temporada para visitar?',
    acceptedAnswer:
      'El otoño (septiembre a noviembre) suele ofrecer el mejor equilibrio entre temperatura y lluvia. El invierno (diciembre a febrero) es temporada seca y con temperaturas frescas por la noche.'
  },
  {
    name: '¿Puedo llevar a mi familia con niños pequeños?',
    acceptedAnswer:
      'Sí. Es un espacio abierto con bancos y fuentes a la vista. Se recomienda evitar las horas de mayor calor y llevar protector solar, agua y un snack ligero.'
  },
  {
    name: '¿Es segura la visita por la noche?',
    acceptedAnswer:
      'La zona está iluminada y cuenta con presencia policial regular. Como en cualquier centro urbano, conviene mantener precaución con objetos personales y evitar zonas poco transitadas.'
  }
] as const;

export const SYNC_SOURCES = [
  {
    label: 'Google Maps — Plaza de la Liberación',
    url: 'https://maps.app.goo.gl/hcyXC4r12ZbDyAXy7',
    type: 'rating-reviews'
  },
  {
    label: 'Wikimedia Commons — fotografías',
    url: 'https://commons.wikimedia.org/wiki/Category:Plaza_de_la_Liberaci%C3%B3n_(Guadalajara)',
    type: 'images'
  },
  {
    label: 'SECTURJAL — Secretaría de Turismo de Jalisco',
    url: 'https://secturjal.jalisco.gob.mx/',
    type: 'official-tourism'
  },
  {
    label: 'NOAA — climatología histórica',
    url: 'https://www.noaa.gov/',
    type: 'climate-normal'
  },
  {
    label: 'Ayuntamiento de Guadalajara',
    url: 'https://www.guadalajara.gob.mx/',
    type: 'official-government'
  }
] as const;