import Link           from 'next/link'
import Image          from 'next/image'
import CategoryBadge  from './CategoryBadge'
import { formatDate } from '@/lib/utils'
import type { PostMeta } from '@/types'

interface Props {
  post:    PostMeta
  variant?: 'default' | 'featured' | 'compact'
}

export default function ArticleCard({ post, variant = 'default' }: Props) {
  const href = `/articulos/${post.slug}`

  if (variant === 'compact') {
    return (
      <Link href={href} className="flex gap-4 group p-3 rounded-xl hover:bg-gray-50 transition-colors">
        {post.image && (
          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <CategoryBadge category={post.category} size="sm" linked={false} />
          <h3 className="text-sm font-bold text-gray-900 mt-1 leading-snug line-clamp-2 group-hover:text-navy-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{formatDate(post.date)}</p>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <article className="relative rounded-2xl overflow-hidden shadow-lg group h-80">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-teal-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <CategoryBadge category={post.category} size="sm" />
          <Link href={href}>
            <h2 className="text-xl font-serif font-bold text-white mt-2 leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
              {post.title}
            </h2>
          </Link>
          <p className="text-xs text-gray-300 mt-2">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </div>
      </article>
    )
  }

  // default
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
      {post.image && (
        <Link href={href} className="block overflow-hidden h-48 relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={post.category} size="sm" />
          <span className="text-xs text-gray-400">{post.readingTime}</span>
        </div>
        <Link href={href}>
          <h2 className="text-lg font-serif font-bold text-gray-900 leading-snug mb-2 group-hover:text-navy-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
          <Link
            href={href}
            className="text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  )
}
