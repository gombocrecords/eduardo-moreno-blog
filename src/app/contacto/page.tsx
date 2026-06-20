import type { Metadata } from 'next'
import { SITE_CONFIG }   from '@/lib/utils'

export const metadata: Metadata = {
  title:       `Contacto | ${SITE_CONFIG.name}`,
  description: 'Póngase en contacto con Eduardo José Moreno.',
}

export default function ContactoPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-serif font-bold text-navy-600 mb-4">Contacto</h1>
      <p className="text-gray-600 mb-10">
        Utilice el formulario para enviar un mensaje. Responderé a la brevedad.
      </p>

      <form name="contacto" method="POST" data-netlify="true" className="space-y-6">
        <input type="hidden" name="form-name" value="contacto" />

        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
          <input id="nombre" name="nombre" type="text" required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Correo electrónico</label>
          <input id="email" name="email" type="email" required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows={6} required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none" />
        </div>

        <button type="submit"
          className="w-full bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-navy-700 transition-colors">
          Enviar mensaje
        </button>
      </form>
    </main>
  )
}
