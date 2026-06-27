import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
