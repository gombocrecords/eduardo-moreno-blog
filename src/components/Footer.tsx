import Link           from 'next/link'
import { SITE_CONFIG } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-600 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Author */}
          <div>
            <h2 className="text-lg font-serif font-bold mb-3">{SITE_CONFIG.name}</h2>
            <p className="text-blue-200 text-sm leading-relaxed">
              Análisis y opinión sobre movilidad, logística e infraestructura en América Latina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-blue-300">
              Secciones
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Movilidad',       href: '/movilidad' },
                { label: 'Logística',       href: '/logistica' },
                { label: 'Infraestructura', href: '/infraestructura' },
                { label: 'Sobre el Autor',  href: '/sobre-el-autor' },
                { label: 'Contacto',        href: '/contacto' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-blue-300">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <span className="font-semibold text-white">Email: </span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Teléfono: </span>
                {SITE_CONFIG.phone}
              </li>
              <li>
                <span className="font-semibold text-white">LinkedIn: </span>
                <a
                  href={`https://${SITE_CONFIG.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 text-center text-blue-300 text-xs">
          © {year} {SITE_CONFIG.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
