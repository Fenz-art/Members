import { useState } from 'react'

export function useFileUpload() {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const API_URL = import.meta.env.VITE_API_URL || ''

  const upload = async (file: File): Promise<string> => {
    setUploading(true)
    setError(null)
    const formData = new FormData()
    formData.append('avatar', file)

    const res = await fetch(`${API_URL}/api/uploads/avatar`, {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) {
      const text = await res.text()
      setError(text || 'Upload failed')
      setUploading(false)
      throw new Error(text || 'Upload failed')
    }

    const data = (await res.json()) as { imageUrl: string }
    setUploading(false)
    return data.imageUrl
  }

  return { upload, uploading, error }
}






