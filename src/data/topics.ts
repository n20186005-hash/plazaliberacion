import { OFFICIAL_SOURCES, type SourceKey } from '../lib/seo';
import {
  TOPIC_GROUPS,
  TOPIC_GROUP_ORDER,
  type Topic,
  type TopicGroupId
} from './topic-types';
import { TOPICS_CORE } from './topics-core';
import { TOPICS_TRANSPORT } from './topics-transport';
import { TOPICS_HISTORY } from './topics-history';
import { TOPICS_NEARBY } from './topics-nearby';
import { TOPICS_ROUTES } from './topics-routes';
import { TOPICS_PRACTICAL } from './topics-practical';

export * from './topic-types';

/** 36 guías independientes, agrupadas según el plan 01–36. */
export const TOPICS: Topic[] = [
  ...TOPICS_CORE,
  ...TOPICS_TRANSPORT,
  ...TOPICS_HISTORY,
  ...TOPICS_NEARBY,
  ...TOPICS_ROUTES,
  ...TOPICS_PRACTICAL
];

const topicBySlug = new Map(TOPICS.map((topic) => [topic.slug, topic]));

export const TOPIC_SLUGS: string[] = TOPICS.map((topic) => topic.slug);

export function getTopic(slug: string): Topic | undefined {
  return topicBySlug.get(slug);
}

export function topicPath(slug: string): string {
  return `/${slug}/`;
}

export function topicsByGroup(group: TopicGroupId): Topic[] {
  return TOPICS.filter((topic) => topic.group === group);
}

export function groupLabel(group: TopicGroupId): string {
  return TOPIC_GROUPS.find((item) => item.id === group)?.label ?? group;
}

/** Enlaces relacionados resueltos y filtrados: nunca genera enlaces rotos. */
export function relatedTopics(topic: Topic): Topic[] {
  return topic.related
    .map((slug) => topicBySlug.get(slug))
    .filter((item): item is Topic => Boolean(item));
}

export function topicSources(topic: Topic): { name: string; url: string; note: string }[] {
  return topic.sources
    .filter((key): key is SourceKey => key in OFFICIAL_SOURCES)
    .map((key) => OFFICIAL_SOURCES[key]);
}

export function topicBreadcrumbs(topic: Topic): { name: string; path: string }[] {
  return [
    { name: 'Inicio', path: '/' },
    { name: groupLabel(topic.group), path: '/#guias' },
    { name: topic.cardTitle, path: topicPath(topic.slug) }
  ];
}

/** Comprobaciones de integridad del registro (se ejecutan en build). */
function assertRegistry(): void {
  const numbers = new Set<number>();
  for (const topic of TOPICS) {
    if (topicBySlug.get(topic.slug) !== topic) {
      throw new Error(`Slug duplicado en el registro de guías: ${topic.slug}`);
    }
    if (numbers.has(topic.num)) {
      throw new Error(`Número de guía duplicado: ${topic.num}`);
    }
    numbers.add(topic.num);
    if (!TOPIC_GROUP_ORDER.includes(topic.group)) {
      throw new Error(`Grupo desconocido en ${topic.slug}: ${topic.group}`);
    }
    if (topic.related.length < 2) {
      throw new Error(`La guía ${topic.slug} necesita al menos 2 enlaces internos`);
    }
    for (const slug of topic.related) {
      if (!topicBySlug.has(slug)) {
        throw new Error(`Enlace relacionado inexistente en ${topic.slug}: ${slug}`);
      }
    }
    for (const key of topic.sources) {
      if (!(key in OFFICIAL_SOURCES)) {
        throw new Error(`Fuente desconocida en ${topic.slug}: ${key}`);
      }
    }
    if (topic.faqs.length < 2) {
      throw new Error(`La guía ${topic.slug} necesita al menos 2 preguntas frecuentes`);
    }
  }
  if (TOPICS.length !== 36) {
    throw new Error(`Se esperaban 36 guías y hay ${TOPICS.length}`);
  }
}

assertRegistry();
