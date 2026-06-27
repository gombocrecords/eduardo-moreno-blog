'use client'

import Link              from 'next/link'
import { usePathname }   from 'next/navigation'
import { useState }      from 'react'

const NAV = [
  { label: 'Inicio',           href: '/' },
  { label: 'Movilidad',        href: '/movilidad' },
  { label: 'Logística',        href: '/logistica' },
  { label: 'Infraestructura',  href: '/infraestructura' },
  { label: 'Noticias',         href: '/noticias' },
  { label: 'Sobre el Autor',   href: '/sobre-el-autor' },
  { label: 'Contacto',         href: '/contacto' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-navy-600 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors">
            edumor60@yahoo.com.ar
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link key={href} href={href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    active ? 'bg-navy-600 text-white' : 'text-gray-700 hover:bg-navy-50 hover:text-navy-600'
                  }`}>
                  {label}
                </Link>
              )
            })}
          </nav>
          <button className="lg:hidden p-2 rounded-md text-navy-600 hover:bg-navy-50" onClick={() => setOpen(v => !v)} aria-label="Abrir menú">
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-3 space-y-1">
            {NAV.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link key={href} href={href} onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                    active ? 'bg-navy-600 text-white' : 'text-gray-700 hover:bg-navy-50 hover:text-navy-600'
                  }`}>
                  {label}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
