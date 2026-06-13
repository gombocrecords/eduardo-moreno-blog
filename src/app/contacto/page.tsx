'use client'

import type { Metadata }  from 'next'
import { useState }       from 'react'
import { SITE_CONFIG }    from '@/lib/utils'

// Note: metadata export cannot be used in client components.
// Move this page to a server wrapper if needed for SEO.

export default function ContactoPage() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Netlify forms: the form posts to itself automatically when deployed to Netlify
    try {
      const body = new URLSearchParams({
        'form-name': 'contacto',
        ...form,
      })
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <p className="text-teal-500 font-semibold text-sm uppercase tracking-widest mb-2">Contacto</p>
      <h1 className="text-4xl font-serif font-bold text-navy-600 mb-3">Escríbame</h1>
      <p className="text-lg text-gray-600 mb-10">
        Si tiene alguna pregunta, propuesta o simplemente desea compartir su opinión, utilice este formulario. Respondo personalmente.
      </p>

      {/* Contact info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: '✉️', label: 'Email',    value: SITE_CONFIG.email },
          { icon: '📞', label: 'Teléfono', value: SITE_CONFIG.phone },
          { icon: '💼', label: 'LinkedIn', value: SITE_CONFIG.linkedin },
        ].map(({ icon, label, value }) => (
          <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <span className="text-2xl block mb-1">{icon}</span>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-sm text-gray-700 mt-0.5 break-all">{value}</p>
          </div>
        ))}
      </div>

      {/* Netlify form */}
      {status === 'sent' ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
          <p className="text-5xl mb-4">✅</p>
          <p className="text-xl font-bold text-navy-600 mb-2">¡Mensaje enviado!</p>
          <p className="text-gray-600">Gracias por escribir. Responderé a la brevedad.</p>
        </div>
      ) : (
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contacto" />

          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
              Su nombre *
            </label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              placeholder="Juan García"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-navy-600 focus:outline-none text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
              Correo electrónico *
            </label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="juan@ejemplo.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-navy-600 focus:outline-none text-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">
              Mensaje *
            </label>
            <textarea
              id="message" name="message" required rows={6}
              value={form.message} onChange={handleChange}
              placeholder="Escriba su mensaje aquí..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-navy-600 focus:outline-none text-base resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg p-3">
              Ocurrió un error. Por favor envíe un correo directamente a {SITE_CONFIG.email}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-navy-600 text-white font-bold py-4 rounded-xl hover:bg-navy-700 transition-colors text-lg disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </div>
  )
}
