import type { Metadata }  from 'next'
import Image              from 'next/image'
import Link               from 'next/link'
import ArticleCard        from '@/components/ArticleCard'
import CategoryBadge      from '@/components/CategoryBadge'
import SearchBar          from '@/components/SearchBar'
import { getAllPosts, getFeaturedPosts, getLatestPosts } from '@/lib/posts'
import { SITE_CONFIG, CATEGORY_ICON } from '@/lib/utils'

export const metadata: Metadata = {
  title:       SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  const latest   = getLatestPosts(6)
  const featured = getFeaturedPosts()
  const all      = getAllPosts()

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy-600 leading-tight mb-8">
              Movilidad, Infraestructura y Logística
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {SITE_CONFIG.categories.map(cat => (
                <CategoryBadge key={cat} category={cat} size="md" />
              ))}
            </div>
            <SearchBar />
          </div>
          <div className="order-1 md:order-2 flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full overflow-hidden border-4 border-navy-600 shadow-xl">
              <Image
                src="/images/autor.jpg"
                alt="Eduardo José Moreno"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-3 gap-4">
            {([
              { cat: 'Movilidad',       href: '/movilidad',       desc: 'Transporte y planificación urbana' },
              { cat: 'Logística',       href: '/logistica',       desc: 'Cadenas de suministro y puertos' },
              { cat: 'Infraestructura', href: '/infraestructura', desc: 'Obras públicas e inversión' },
            ] as const).map(({ cat, href, desc }) => (
              <Link key={cat} href={href}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <span className="text-3xl block mb-2">{CATEGORY_ICON[cat]}</span>
                <h2 className="font-serif font-bold text-navy-600 text-lg group-hover:text-teal-500 transition-colors">{cat}</h2>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
                <p className="text-xs text-teal-500 font-semibold mt-2">
                  {all.filter(p => p.category === cat).length} artículos →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {featured.length > 0 && (
          <section className="py-12">
            <h2 className="text-2xl font-serif font-bold text-navy-600 mb-6 flex items-center gap-2">
              <span>⭐</span> Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map(post => (
                <ArticleCard key={post.slug} post={post} variant="featured" />
              ))}
            </div>
          </section>
        )}

        <section className="py-12 border-t border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-navy-600 mb-6 flex items-center gap-2">
            <span>📝</span> Últimas Publicaciones
          </h2>
          {latest.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">✍️</p>
              <p className="text-lg">Aún no hay artículos publicados.</p>
              <p className="text-sm mt-2">
                Ingrese al panel en{' '}
                <Link href="/admin/" className="text-teal-500 underline">/admin</Link>
                {' '}para crear su primer artículo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map(post => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  )
}
