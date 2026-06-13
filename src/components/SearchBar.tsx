'use client'

import { useState, useCallback } from 'react'
import { useRouter }             from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) router.push(`/?q=${encodeURIComponent(query.trim())}`)
  }, [query, router])

  return (
    <form onSubmit={handleSubmit} role="search" className="flex gap-2 w-full max-w-xl">
      <label htmlFor="search-input" className="sr-only">Buscar artículos</label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar artículos..."
        className="flex-1 px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-navy-600 focus:outline-none text-base text-gray-800 bg-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-navy-600 text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors text-base"
      >
        Buscar
      </button>
    </form>
  )
}
