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
    'Plaza Liberación Guadalajara'
  ],
  city: 'Guadalajara',
  state: 'Jalisco',
  country: 'México',
  countryCode: 'MX',
  postalCode: '44100',
  streetAddress: 'C. Pedro Loza 27A, Zona Centro',
  latitude: 20.677015,
  longitude: -103.3457694,
  category: 'Atracción turística',
  mapsShareUrl: 'https://maps.app.goo.gl/hcyXC4r12ZbDyAXy7',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=20.677015,-103.3457694&hl=es&z=17&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=20.677015,-103.3457694',
  ratingValue: 4.7,
  reviewCount: 14449,
  reviewsLastSyncISO: '2026-10-29',
  reviewsLastSyncLabel: '29 de octubre de 2026',
  heroImage: '/images/plaza-illustration.svg',
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
    "acceptedAnswer": "La consulta del 29 de octubre de 2026 mostraba 4.7/5 de 14,449 reseñas de terceros en Google Maps. No son reseñas recopiladas por esta guía ni una actualización automática."
  },
  {
    "name": "¿Hay una ruta accesible garantizada?",
    "acceptedAnswer": "No hemos verificado una ruta completa sin escalones ni el estado actual de rampas, bancos o baños. Consulta cada tramo y recinto antes de salir; ajusta el paseo a tu movilidad."
  }
] as const;
export const SYNC_SOURCES = [] as const;
