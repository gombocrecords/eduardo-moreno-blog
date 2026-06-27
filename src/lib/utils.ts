import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-AR', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  })
}

export const SITE_CONFIG = {
  name:        'Movilidad, Logística e Infraestructura',
  description: 'Blog personal de Eduardo José Moreno sobre movilidad urbana, logística internacional e infraestructura estratégica en América Latina.',
  email:       'edumor60@yahoo.com.ar',
  phone:       '',
  linkedin:    '',
  url:         'https://blogmli.netlify.app',
  author:      'Eduardo José Moreno',
  categories:  ['Movilidad', 'Logística', 'Infraestructura', 'Noticias'] as const,
}

export type Category = typeof SITE_CONFIG.categories[number]

export const CATEGORY_ICON: Record<string, string> = {
  Movilidad:       '🚌',
  Logística:       '📦',
  Infraestructura: '🏗️',
  Noticias:        '📰',
}

export const CATEGORY_COLORS: Record<string, string> = {
  Movilidad:       'bg-blue-100 text-blue-800',
  Logística:       'bg-amber-100 text-amber-800',
  Infraestructura: 'bg-emerald-100 text-emerald-800',
  Noticias:        'bg-violet-100 text-violet-800',
}

export const CATEGORY_HREF: Record<string, string> = {
  Movilidad:       '/movilidad',
  Logística:       '/logistica',
  Infraestructura: '/infraestructura',
  Noticias:        '/noticias',
}
