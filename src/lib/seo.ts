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
  name: 'Plaza de la Liberación — Guía de visita',
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
    'Plaza Liberación Guadalajara',
    'Plaza Liberación GDL',
    'Plaza de la Liberación en Guadalajara',
    'Plaza de los Tres Poderes',
    'Plaza de las Dos Copas'
  ],
  city: 'Guadalajara',
  state: 'Jalisco',
  country: 'México',
  countryCode: 'MX',
  postalCode: '44100',
  streetAddress: 'C. Pedro Loza 27A, Zona Centro',
  // Plus Code y dirección de Maps se usan como referencia de ubicación,
  // no como entrada única ni como domicilio de la plaza completa.
  plusCodeShort: 'MMG3+RM',
  plusCode: 'MMG3+RM Guadalajara, Jal., México',
  latitude: 20.677015,
  longitude: -103.3457694,
  category: 'Atracción turística',
  mapsShareUrl: 'https://maps.app.goo.gl/hcyXC4r12ZbDyAXy7',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=20.677015,-103.3457694&hl=es&z=17&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=20.677015,-103.3457694',
  ratingValue: 4.7,
  reviewCount: 14451,
  reviewsLastSyncISO: '2026-11-04',
  reviewsLastSyncLabel: '4 de noviembre de 2026',
  heroImage: '/images/plaza-hero.jpg',
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
    "name": "¿Dónde está Plaza de la Liberación?",
    "acceptedAnswer": "Está en el centro histórico de Guadalajara, entre Catedral y Teatro Degollado. Maps lista C. Pedro Loza 27A como referencia; no confirmamos ese número como entrada exacta. Verifica el punto de llegada y los accesos abiertos."
  },
  {
    "name": "¿Es la misma que Plaza de Armas?",
    "acceptedAnswer": "No. Son espacios distintos de la Cruz de Plazas. La fuente municipal fecha la terminación de Plaza de la Liberación en 1953; no la describe como la plaza colonial renombrada."
  },
  {
    "name": "¿Qué significa su nombre?",
    "acceptedAnswer": "Turismo Guadalajara relaciona el monumento de Miguel Hidalgo con el decreto de abolición de la esclavitud. También recoge los nombres Dos Copas y Tres Poderes."
  },
  {
    "name": "¿Abre 24 horas?",
    "acceptedAnswer": "Maps mostraba 24 horas el 29 de octubre de 2026. Es un dato de terceros, no una garantía de acceso a todas las zonas, fuentes, servicios o eventos. Consulta avisos y restricciones locales."
  },
  {
    "name": "¿Se paga entrada?",
    "acceptedAnswer": "La fuente municipal describe una plaza pública; no se verificó una tarifa general vigente ni la de actividades. Confirma cualquier cobro con el organizador. Recintos, estacionamiento y transporte tienen condiciones propias."
  },
  {
    "name": "¿Está abierto el estacionamiento subterráneo?",
    "acceptedAnswer": "CoST-Jalisco documenta una obra del estacionamiento Tres Poderes, actualizada el 21 de octubre de 2026. Una ficha de obra no confirma horario de operación, tarifa, cupo ni entrada abierta hoy; consulta al operador antes de llegar."
  },
  {
    "name": "¿Cuál es la calificación en Maps?",
    "acceptedAnswer": "La consulta del 4 de noviembre de 2026 mostraba 4.7/5 de 14,451 reseñas de terceros en Google Maps. No son reseñas recopiladas por esta guía ni una actualización automática."
  },
  {
    "name": "¿Hay una ruta accesible garantizada?",
    "acceptedAnswer": "No hemos verificado una ruta completa sin escalones ni el estado actual de rampas, bancos o baños. Consulta cada tramo y recinto antes de salir; ajusta el paseo a tu movilidad."
  }
] as const;
export const SYNC_SOURCES = [] as const;

/**
 * Registro de fuentes consultadas para las guías temáticas.
 * Cada ficha distingue el hecho documentado de la recomendación editorial.
 * Las fichas de obra, directorios y mapas pueden cambiar: se citan con su
 * fecha de consulta y nunca se presentan como tarifa, horario o apertura vigente.
 */
export const OFFICIAL_SOURCES = {
  turismoPlaza: {
    name: 'Turismo Guadalajara · Plaza Liberación',
    url: 'https://tequiero.guadalajara.gob.mx/lugares/plaza-liberacion',
    note: 'Identidad del espacio, nombres históricos, proyecto urbano y terminación.'
  },
  rutaCentro: {
    name: 'Turismo Guadalajara · Ruta del Centro Histórico',
    url: 'https://tequiero.guadalajara.gob.mx/rutas/ruta-de-centro-historico',
    note: 'Relación entre la plaza, la Catedral, el Teatro Degollado y otros espacios del centro.'
  },
  gacetaPlazas: {
    name: 'Gobierno de Guadalajara · Plazas y fuentes (Gaceta, marzo de 2021)',
    url: 'https://transparencia.guadalajara.gob.mx/sites/default/files/GacetaMarzo2021.pdf',
    note: 'Antecedentes del espacio público, fuentes y denominaciones locales.'
  },
  guiaArquitectonica: {
    name: 'Cultura Jalisco · Guía arquitectónica del Centro Histórico',
    url: 'https://sc.jalisco.gob.mx/sites/sc.jalisco.gob.mx/files/guia_arquitectonica1.pdf',
    note: 'Cruz de Plazas y lectura urbana del conjunto.'
  },
  inahTeatro: {
    name: 'INAH · Catálogo Nacional de Monumentos Históricos Inmuebles · Teatro Degollado',
    url: 'https://catalogonacionalmhi.inah.gob.mx/consulta_publica/detalle/26858',
    note: 'Ficha de patrimonio del Teatro Degollado.'
  },
  visitJalisco: {
    name: 'Visita Jalisco · Guadalajara',
    url: 'https://visitjalisco.mx/regiones/guadalajara',
    note: 'Contexto turístico del centro histórico; estaciones y rutas deben reconfirmarse.'
  },
  estacionamientos: {
    name: 'Gobierno de Guadalajara · Directorio de estacionamientos municipales',
    url: 'https://enlinea.guadalajara.gob.mx/estacionamientos/detalle.php?id=87&jumpMenu=CENTRO&pageIndex=2',
    note: 'Directorio de referencia; tarifas, cupo y horarios requieren verificación actual.'
  },
  costEstacionamiento: {
    name: 'CoST-Jalisco · Obra del estacionamiento Tres Poderes',
    url: 'https://www.costjalisco.org.mx/project-single/5514',
    note: 'Ficha de obra con actualización del 21/10/2026; no acredita operación ni tarifa.'
  },
  maps: {
    name: 'Google Maps · Plaza de la Liberación',
    url: 'https://maps.app.goo.gl/hcyXC4r12ZbDyAXy7',
    note: 'Ubicación, Plus Code y calificación agregada de terceros, consultados el 04/11/2026.'
  },
  secturJalisco: {
    name: 'Secretaría de Turismo de Jalisco',
    url: 'https://secturjal.jalisco.gob.mx/',
    note: 'Portal oficial de turismo del estado.'
  },
  openMeteo: {
    name: 'Open-Meteo · Previsión meteorológica',
    url: 'https://open-meteo.com/',
    note: 'Datos CC BY 4.0; previsión de modelo, no observación instalada en la plaza.'
  }
} as const;

export type SourceKey = keyof typeof OFFICIAL_SOURCES;
