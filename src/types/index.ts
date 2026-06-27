export type Category = 'Movilidad' | 'Logística' | 'Infraestructura' | 'Noticias'

export interface PostFrontmatter {
  title:       string
  date:        string
  category:    Category
  excerpt:     string
  image?:      string
  featured?:   boolean
  draft?:      boolean
  author?:     string
}

export interface Post extends PostFrontmatter {
  slug:        string
  content:     string
  readingTime: string
}

export interface PostMeta extends PostFrontmatter {
  slug:        string
  readingTime: string
}
