"use client" // Tambahkan use client karena menggunakan useState dan useRouter

import Image from "next/image"
// import Link from "next/link"
import { useRouter } from "next/navigation" // Import useRouter
import { useState, useEffect } from "react" // Import useState dan useEffect

interface CourseCardProps {
  id: number
  title: string
  description: string
  image: string
  slug: string
  documentId: string // Tambahkan documentId
}

export default function CourseCard({ id, title, description, image, slug, documentId }: CourseCardProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)
  }, [])

  const handleBelajarSekarangClick = () => {
    if (isAuthenticated) {
      // Arahkan ke halaman silabus dinamis dengan documentId
      router.push(`/sylabus/${documentId}`)
    } else {
      router.push("/login") // Arahkan ke halaman login jika belum login
    }
  }

  return (
    <div className="relative w-full max-w-[331px] h-[440px] rounded-lg overflow-hidden group mx-auto">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      
      <div className="absolute inset-0 flex flex-col justify-end">
        <div 
          className="p-3 m-2 rounded-md flex flex-col" 
          style={{ 
            background: 'rgba(0, 0, 0, 0.32)', 
            backdropFilter: 'blur(24px)',
          }}
        >
            <h3 className="font-heading font-bold text-2xl text-white" style={{ lineHeight: '30px' }}>{title}</h3>
            <p className="text-base text-white mt-2 line-clamp-3" style={{ lineHeight: '120%' }}>{description}</p>
            
            <button
              onClick={handleBelajarSekarangClick}
              className="w-full mt-4 px-4 py-2.5 text-sm font-semibold text-center text-white transition-colors rounded-lg bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]"
            >
              Belajar Sekarang
            </button>
        </div>
      </div>
    </div>
  )
}
