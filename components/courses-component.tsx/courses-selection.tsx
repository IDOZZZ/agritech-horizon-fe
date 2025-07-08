"use client"

import { useState, useEffect } from "react"
import CourseCard from "@/components/ui/course-card"
import SectionHeader from "@/components/ui/section-header"
import { httpRequest } from "@/lib/http"

interface Category {
  id: number
  name: string
  slug: string
  description: string
  documentId: string
  thumbnail?: {
    url: string
  }
}

export default function CourseSelection() {
  const [categoriesData, setCategoriesData] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await httpRequest("/api/categories?populate=thumbnail", {
          method: "GET",
        })

        if (response.error) {
          setError(response.message || "Gagal mengambil data kategori.")
          setCategoriesData([])
          return
        }

        const categories = response.data && Array.isArray(response.data) ? response.data : []

        const fetchedCategories: Category[] = categories.map((item: any) => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          description: item.description,
          documentId: item.documentId,
          thumbnail: item.thumbnail,
        }))

        setCategoriesData(fetchedCategories)
      } catch (err: any) {
        console.error("Error fetching categories:", err)
        setError(err.message || "Terjadi kesalahan saat mengambil data kategori.")
        setCategoriesData([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto mb-12 text-center">
          <p>Memuat kategori...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto mb-12 text-center">
          <p className="text-red-500">Error: {error}</p>
          <p>Gagal memuat kategori. Silakan coba lagi nanti.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto mb-12">
        <SectionHeader title="Temukan Kelas sesuai dengan Kebutuhanmu" />
      </div>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        <div className="container mx-auto" style={{ maxWidth: "1550px" }}>
          <div className="flex gap-6 pb-4 pl-4 pr-4" style={{ width: "max-content" }}>
            {categoriesData.map((category) => (
              <div key={category.id} className="w-[270px] flex-shrink-0">
                <CourseCard
                  id={category.id}
                  title={category.name}
                  description={category.description}
                  image={category.thumbnail ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${category.thumbnail.url}` : "/farming.jpg"}
                  slug={category.slug}
                  documentId={category.documentId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
