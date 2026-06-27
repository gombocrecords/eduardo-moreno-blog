import type { Metadata } from 'next'
import ArticleCard        from '@/components/ArticleCard'
import { getAllPosts }     from '@/lib/posts'
import { SITE_CONFIG }    from '@/lib/utils'

export const metadata: Metadata = {
  title:       `Noticias | ${SITE_CONFIG.name}`,
  description: 'Novedades sobre movilidad, logística e infraestructura.',
}

export default function NoticiasPage() {
  const posts = getAllPosts().filter(p => (p.category as string) === 'Noticias')

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <span className="text-4xl">📰</span>
        <h1 className="text-3xl font-serif font-bold text-navy-600 mt-2">Noticias</h1>
        <p className="text-gray-500 mt-1">Novedades del sector</p>
      </div>
      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">📰</p>
          <p className="text-lg">Aún no hay noticias publicadas.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
