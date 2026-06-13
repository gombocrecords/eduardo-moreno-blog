import { format, parseISO } from 'date-fns'
import { es }               from 'date-fns/locale'
import { clsx, type ClassValue } from 'clsx'
import type { Category }    from '@/types'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), "d 'de' MMMM 'de' yyyy", { locale: es })
  } catch {
    return dateStr
  }
}

export const CATEGORY_COLORS: Record<Category, string> = {
  'Movilidad':      'bg-blue-100 text-blue-800 border-blue-200',
  'Logística':      'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Infraestructura':'bg-orange-100 text-orange-800 border-orange-200',
}

export const CATEGORY_HREF: Record<Category, string> = {
  'Movilidad':       '/movilidad',
  'Logística':       '/logistica',
  'Infraestructura': '/infraestructura',
}

export const CATEGORY_ICON: Record<Category, string> = {
  'Movilidad':       '🚌',
  'Logística':       '📦',
  'Infraestructura': '🏗',
}

export const SITE_CONFIG = {
  name:        'Eduardo José Moreno',
  tagline:     'Análisis y opinión sobre movilidad, logística e infraestructura',
  description: 'Blog personal de Eduardo José Moreno. Análisis y opinión sobre movilidad urbana, logística internacional e infraestructura estratégica en América Latina.',
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tu-sitio.netlify.app',
  author:      'Eduardo José Moreno',
  email:       '[correo@ejemplo.com]',
  phone:       '[+54 XX XXXX-XXXX]',
  linkedin:    '[linkedin.com/in/eduardomoreno]',
  categories:  ['Movilidad', 'Logística', 'Infraestructura'] as Category[],
}
