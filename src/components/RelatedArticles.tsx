import ArticleCard  from './ArticleCard'
import type { PostMeta } from '@/types'

interface Props {
  posts: PostMeta[]
}

export default function RelatedArticles({ posts }: Props) {
  if (!posts.length) return null

  return (
    <section className="mt-16 pt-10 border-t border-gray-200">
      <h2 className="text-2xl font-serif font-bold text-navy-600 mb-6">
        Artículos relacionados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
