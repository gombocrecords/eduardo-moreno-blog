import fs          from 'fs'
import path        from 'path'
import matter      from 'gray-matter'
import { remark }  from 'remark'
import remarkHtml  from 'remark-html'
import remarkGfm   from 'remark-gfm'
import readingTime from 'reading-time'
import type { Post, PostMeta, Category } from '@/types'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true })
}

export function getAllPostSlugs(): string[] {
  ensureDir()
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

export function getAllPosts(): PostMeta[] {
  ensureDir()
  const slugs = getAllPostSlugs()
  return slugs
    .map(slug => {
      const raw  = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
      const { data, content } = matter(raw)
      const stats = readingTime(content)
      return {
        slug,
        title:       data.title       ?? 'Sin título',
        date:        data.date        ?? new Date().toISOString(),
        category:    data.category    ?? 'Movilidad',
        excerpt:     data.excerpt     ?? '',
        image:       data.image       ?? null,
        featured:    data.featured    ?? false,
        draft:       data.draft       ?? false,
        author:      data.author      ?? 'Eduardo José Moreno',
        readingTime: stats.text,
      } as PostMeta
    })
    .filter(p => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDir()
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)

  return {
    slug,
    title:       data.title       ?? 'Sin título',
    date:        data.date        ?? new Date().toISOString(),
    category:    data.category    ?? 'Movilidad',
    excerpt:     data.excerpt     ?? '',
    image:       data.image       ?? null,
    featured:    data.featured    ?? false,
    draft:       data.draft       ?? false,
    author:      data.author      ?? 'Eduardo José Moreno',
    readingTime: stats.text,
    content:     processed.toString(),
  } as Post
}

export function getPostsByCategory(category: Category): PostMeta[] {
  return getAllPosts().filter(p => p.category === category)
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter(p => p.featured).slice(0, 3)
}

export function getLatestPosts(n = 6): PostMeta[] {
  return getAllPosts().slice(0, n)
}

export function getRelatedPosts(slug: string, category: Category, n = 3): PostMeta[] {
  return getAllPosts()
    .filter(p => p.slug !== slug && p.category === category)
    .slice(0, n)
}
