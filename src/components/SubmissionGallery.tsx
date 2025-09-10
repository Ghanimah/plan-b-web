// src/components/SubmissionGallery.tsx
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

type Row = {
  id: number
  full_name: string
  photo_url: string | null
  resume_url: string | null
  inserted_at: string
}

const SubmissionGallery: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const { data: rawData, error } = await supabase
        .from('join_hive_requests')
        .select('id, full_name, photo_url, resume_url, inserted_at')
        .order('inserted_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else if (rawData) {
        // cast to our Row type
        const fetched = rawData as Row[]
        const withUrls: Row[] = fetched.map(r => {
          if (r.photo_url) {
            const { data: storageData } = supabase
              .storage
              .from('self-portrait')
              .getPublicUrl(r.photo_url)
            // storageData.publicUrl holds the full URL
            return { ...r, photo_url: storageData.publicUrl }
          }
          return r
        })
        setRows(withUrls)
      }
      setLoading(false)
    })()
  }, [])

  if (loading) return <p className="p-6">Loading…</p>
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hive Submissions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rows.map(r => (
          <div key={r.id} className="border rounded-lg overflow-hidden shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              {r.photo_url
                ? <img src={r.photo_url} alt={r.full_name} className="object-cover h-full w-full" />
                : <span className="text-gray-500">No photo</span>
              }
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{r.full_name}</h3>
              <p className="text-xs text-gray-500">{new Date(r.inserted_at).toLocaleString()}</p>
              {r.resume_url && (
                <a
                  href={r.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline block mt-2"
                >
                  Download Resume
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubmissionGallery
