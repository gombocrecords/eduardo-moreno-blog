import type { Metadata } from 'next'
import ArticleCard       from '@/components/ArticleCard'
import { getPostsByCategory } from '@/lib/posts'

export const metadata: Metadata = {
  title:       'Logística',
  description: 'Artículos de Eduardo José Moreno sobre logística, cadenas de suministro, puertos y transporte de carga.',
}

export default function LogisticaPage() {
  const posts = getPostsByCategory('Logística')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <span className="text-4xl block mb-3">📦</span>
        <h1 className="text-4xl font-serif font-bold text-navy-600 mb-3">Logística</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Análisis sobre cadenas de suministro, puertos, transporte de carga, distribución y operaciones logísticas en la región.
        </p>
        <div className="mt-4 h-1 w-24 bg-emerald-500 rounded" />
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-lg py-16 text-center">
          Próximamente: artículos sobre logística.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => <ArticleCard key={post.slug} post={post} />)}
        </div>
      )}
    </div>
  )
}
