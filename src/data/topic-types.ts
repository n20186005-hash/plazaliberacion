import type { SourceKey } from '../lib/seo';

/** Fecha de revisión editorial común a las 36 guías. */
export const TOPICS_UPDATED = '4 de noviembre de 2026';
export const TOPICS_UPDATED_ISO = '2026-11-04';

export type TopicGroupId = 'core' | 'transport' | 'history' | 'nearby' | 'routes' | 'practical';
export type TopicPriority = 'P0' | 'P1' | 'P2';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  /** Aviso de verificación / límite editorial, mostrado en un recuadro. */
  note?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  /** 01–36, según el plan de páginas. */
  num: number;
  slug: string;
  group: TopicGroupId;
  priority: TopicPriority;
  /** Título corto para tarjetas de enlaces internos. */
  cardTitle: string;
  cardText: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  keywords: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  /** Slugs de guías relacionadas (2–5). */
  related: string[];
  sources: SourceKey[];
  /** Punto de partida, en páginas de rutas y alrededores. */
  startPoint?: string;
  updated?: string;
}

export interface TopicGroup {
  id: TopicGroupId;
  label: string;
  intro: string;
}

export const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: 'core',
    label: 'Conoce la plaza',
    intro: 'Historia, llegada, acceso, qué ver y los dos elementos que dan nombre al espacio.'
  },
  {
    id: 'transport',
    label: 'Cómo llegar y acceso',
    intro: 'Transporte público, estación Guadalajara Centro, estacionamiento, aeropuerto y accesibilidad.'
  },
  {
    id: 'history',
    label: 'Historia y cultura',
    intro: 'Los nombres históricos, la Cruz de Plazas, el diseño urbano y el arte público.'
  },
  {
    id: 'nearby',
    label: 'Alrededores a pie',
    intro: 'Rutas cortas desde la plaza hacia los edificios y espacios del centro histórico.'
  },
  {
    id: 'routes',
    label: 'Rutas y tipos de visita',
    intro: 'Planes de 30 minutos, una hora y medio día, además de propuestas por perfil.'
  },
  {
    id: 'practical',
    label: 'Comida, eventos y dudas',
    intro: 'Dónde comer, cafés, agenda de actividades, visita nocturna y preguntas breves.'
  }
];

export const TOPIC_GROUP_ORDER: TopicGroupId[] = TOPIC_GROUPS.map((g) => g.id);
