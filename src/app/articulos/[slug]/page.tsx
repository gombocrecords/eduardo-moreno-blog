import type { Metadata }    from 'next'
import Image                from 'next/image'
import { notFound }         from 'next/navigation'
import CategoryBadge        from '@/components/CategoryBadge'
import ShareButtons         from '@/components/ShareButtons'
import RelatedArticles      from '@/components/RelatedArticles'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts'
import { formatDate, SITE_CONFIG } from '@/lib/utils'

interface Params { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'No encontrado' }

  return {
    title:       post.title,
    description: post.excerpt,
    openGraph: {
      title:       post.title,
      description: post.excerpt,
      type:        'article',
      publishedTime: post.date,
      authors:     [SITE_CONFIG.author],
      images:      post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card:        'summary_large_image',
      title:       post.title,
      description: post.excerpt,
      images:      post.image ? [post.image] : [],
    },
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.category, 3)
  const articleUrl = `${SITE_CONFIG.url}/articulos/${slug}`

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

      {/* Meta */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="text-gray-400 text-sm">·</span>
          <time className="text-sm text-gray-500" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-gray-400 text-sm">·</span>
          <span className="text-sm text-gray-500">{post.readingTime}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy-600 leading-tight mb-6">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-teal-500 pl-5 py-1">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Hero image */}
      {post.image && (
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Body */}
      <div
        className="prose-article"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share */}
      <ShareButtons title={post.title} url={articleUrl} />

      {/* Author */}
      <div className="bg-gray-50 rounded-2xl p-6 flex gap-4 items-start border border-gray-100 my-10">
        <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0 border-2 border-navy-600">
          <Image src="/images/autor.jpg" alt={SITE_CONFIG.author} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-navy-600">{SITE_CONFIG.author}</p>
          <p className="text-sm text-gray-600 mt-1">
            Especialista en movilidad, logística e infraestructura. Más de 30 años de trayectoria en América Latina.
          </p>
        </div>
      </div>

      {/* Related */}
      <RelatedArticles posts={related} />
    </article>
  )
}
