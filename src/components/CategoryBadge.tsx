import Link                              from 'next/link'
import { CATEGORY_COLORS, CATEGORY_HREF, CATEGORY_ICON } from '@/lib/utils'
import type { Category }                from '@/types'

interface Props {
  category: Category
  linked?:  boolean
  size?:    'sm' | 'md'
}

export default function CategoryBadge({ category, linked = true, size = 'md' }: Props) {
  const cls = `inline-flex items-center gap-1 font-semibold border rounded-full ${CATEGORY_COLORS[category]} ${
    size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1'
  }`

  const inner = (
    <>
      <span>{CATEGORY_ICON[category]}</span>
      <span>{category}</span>
    </>
  )

  if (linked) {
    return (
      <Link href={CATEGORY_HREF[category]} className={`${cls} hover:opacity-80 transition-opacity`}>
        {inner}
      </Link>
    )
  }

  return <span className={cls}>{inner}</span>
}
