// app/page.tsx (App Router)
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient.ts'

export default function Home() {
  const [rows, setRows] = useState<any[]>([])

  useEffect(() => {
    supabase.from('profiles').select('*').then(({ data, error }) => {
      if (error) console.error(error)
      else setRows(data ?? [])
    })
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>Profiles</h1>
      <ul>
        {rows.map(r => <li key={r.id}>{r.username}</li>)}
      </ul>
    </main>
  )
}
