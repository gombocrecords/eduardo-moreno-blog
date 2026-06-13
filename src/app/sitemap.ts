import type { MetadataRoute } from 'next'
import { getAllPosts }         from '@/lib/posts'
import { SITE_CONFIG }        from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: new Date(), priority: 1.0 },
    { url: `${base}/movilidad`,          lastModified: new Date(), priority: 0.8 },
    { url: `${base}/logistica`,          lastModified: new Date(), priority: 0.8 },
    { url: `${base}/infraestructura`,    lastModified: new Date(), priority: 0.8 },
    { url: `${base}/sobre-el-autor`,     lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contacto`,           lastModified: new Date(), priority: 0.6 },
  ]

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url:          `${base}/articulos/${post.slug}`,
    lastModified: new Date(post.date),
    priority:     0.9,
  }))

  return [...staticRoutes, ...postRoutes]
}
