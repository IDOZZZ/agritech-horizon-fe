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
  thumbnail?: {
    url: string
  }
}

// --- Main Component ---
export default function SyllabusDetailPage() {
  const params = useParams()
  const categoryId = Array.isArray(params.id) ? params.id[0] : params.id

  const [categoryData, setCategoryData] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
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
          `/api/categories?filters[documentId][$eq]=${categoryId}&populate[modules][populate]=materials&populate=thumbnail`,
          {
            method: "GET",
          }
        )

        if (response.error) {
          setError(response.message || "Gagal mengambil data kategori.")
          console.error("API Error:", response.message); // Log API error
          return
        }

        const data = response.data && Array.isArray(response.data) ? response.data[0] : null
        if (data) {
          if (data.modules && Array.isArray(data.modules)) {
            data.modules.forEach((module: Module) => {
              if (module.materials && Array.isArray(module.materials)) {
                module.materials.sort((a, b) => a.order - b.order);
              } else {
                console.log("No materials found in module:", module);
              }
            });
          } else {
            console.log("No modules found in category:", data);
          }
          setCategoryData(data);
          console.log("Category Data:", data); // Log fetched data
          if (data.modules && Array.isArray(data.modules) && data.modules.length > 0 && data.modules[0].materials.length > 0) {
            console.log("First Material Document ID:", data.modules[0].materials[0].documentId); // Log documentId
          } else {
            console.log("No modules or materials found for this category.");
          }
        } else {
          setError("Data kategori tidak ditemukan.")
          console.error("Category data not found.");
        }
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan saat mengambil data.")
        console.error("Fetch error:", err); // Log fetch error
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
              src={categoryData.thumbnail ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${categoryData.thumbnail.url}` : "/farming.jpg"}
              alt={categoryData.name}
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{categoryData.name}</h1>
          <p className="mb-6 text-base leading-relaxed text-[#000000]">{categoryData.description}</p>
          {categoryData.modules && categoryData.modules.length > 0 && categoryData.modules[0].materials && categoryData.modules[0].materials.length > 0 ? (
            <Link href={`/materials/${categoryData.modules[0].materials[0].documentId}`}>
              <Button className="px-6 py-2 text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">Mulai Belajar</Button>
            </Link>
          ) : (
            <p>Tidak ada materi yang tersedia.</p>
          )}
        </div>

        {/* Study Sections from Dynamic Data */}
        <div className="space-y-0">
          {categoryData.modules && Array.isArray(categoryData.modules) ? (
            categoryData.modules.map((module, index) => (
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
            ))
          ) : (
            <p>Tidak ada modul yang tersedia.</p>
          )}
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
