import type { Metadata }  from 'next'
import Script             from 'next/script'
import './globals.css'
import Header             from '@/components/Header'
import Footer             from '@/components/Footer'
import { SITE_CONFIG }    from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:  SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  authors:     [{ name: SITE_CONFIG.author }],
  openGraph: {
    type:        'website',
    locale:      'es_AR',
    url:         SITE_CONFIG.url,
    siteName:    SITE_CONFIG.name,
    title:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card:        'summary_large_image',
    title:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Netlify Identity Widget — necesario para login del CMS */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}</Script>
      </body>
    </html>
  )
}
