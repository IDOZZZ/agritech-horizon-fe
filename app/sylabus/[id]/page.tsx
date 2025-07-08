"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { httpRequest } from "@/lib/http"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { StudySection } from "@/components/ui/study-section" // Import StudySection

// --- Interfaces for API data ---
interface Material {
  id: number
  documentId: string
  title: string
  order: number
}

interface Module {
  id: number
  documentId: string
  title:string
  description: string
  materials: Material[]
}

interface Category {
  id: number
  documentId: string
  name: string
  description: string
  modules: Module[]
}

// --- Main Component ---
export default function SyllabusDetailPage() {
  const params = useParams()
  const categoryId = params.id

  const [categoryData, setCategoryData] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("Received categoryId from params:", categoryId); // Debugging line
    if (!categoryId) {
      setIsLoading(false)
      setError("ID Kategori tidak ditemukan.")
      return
    }

    const fetchCategoryData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await httpRequest(
          `/api/categories?filters[documentId][$eq]=${categoryId}&populate[modules][populate]=materials`,
          {
            method: "GET",
          }
        )

        if (response.error) {
          setError(response.message || "Gagal mengambil data kategori.")
          return
        }

        const data = response.data && Array.isArray(response.data) ? response.data[0] : null
        if (data) {
          data.modules.forEach((module: Module) => {
            module.materials.sort((a, b) => a.order - b.order)
          })
          setCategoryData(data)
        } else {
          setError("Data kategori tidak ditemukan.")
        }
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan saat mengambil data.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategoryData()
  }, [categoryId])

  // --- Render Logic ---
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen"><p>Memuat silabus...</p></div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen"><p className="text-red-500">Error: {error}</p></div>
    )
  }

  if (!categoryData) {
    return (
      <div className="flex items-center justify-center min-h-screen"><p>Silabus tidak ditemukan.</p></div>
    )
  }

  // --- JSX ---
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl px-6 py-8 mx-auto">
        {/* Header Image and Introduction */}
        <div className="mb-8">
          <div className="mb-6">
            <Image
              src={"/farming.jpg"} // Placeholder image
              alt={categoryData.name}
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{categoryData.name}</h1>
          <p className="mb-6 text-base leading-relaxed text-[#000000]">{categoryData.description}</p>
          <Button className="px-6 py-2 text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">Mulai Belajar</Button>
        </div>

        {/* Study Sections from Dynamic Data */}
        <div className="space-y-0">
          {categoryData.modules.map((module, index) => (
            <StudySection
              key={module.id}
              number={index + 1}
              title={module.title}
              description={module.description}
              categories={module.materials.map(material => ({
                id: material.documentId,
                title: material.title,
              }))}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="py-8 mt-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Tingkatkan Kemampuanmu Bersama Kami</h2>
          <p className="max-w-2xl mb-6 text-base leading-relaxed text-[#000000]">
            Siap untuk mendalami pengetahuan Anda? Bergabunglah dengan kursus kami dan jadilah ahli di bidang pertanian modern.
          </p>
          <Button className="px-6 py-2 font-semibold text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}
