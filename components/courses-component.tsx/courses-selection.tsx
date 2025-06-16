"use client"

import { useState, useEffect } from "react"
import CourseCard from "@/components/ui/course-card"
import SectionHeader from "@/components/ui/section-header"
import { httpRequest } from "@/lib/http" // Import httpRequest

interface Course {
  id: number
  title: string
  description: string
  image: string // URL gambar dari Strapi
  category: string
  row: number // Untuk pengelompokan baris
}

export default function CourseSelection() {
  const [coursesData, setCoursesData] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Asumsi endpoint untuk mendapatkan modul/materi gambar adalah /api/courses
        // Anda mungkin perlu menyesuaikan endpoint ini sesuai dengan backend Strapi Anda
        const response = await httpRequest("/api/modules?populate=thumbnail", {
          method: "GET",
        })

        if (response.error) {
          setError(response.message || "Gagal mengambil data kursus.")
          setCoursesData([]) // Pastikan data kosong jika ada error
          return
        }

        // Asumsi struktur data Strapi: respons dibungkus dalam objek 'data',
        // dan array sebenarnya ada di 'response.data.data'.
        // Setiap item memiliki 'attributes' dan di dalamnya ada 'title', 'description', 'thumbnail'.
        const modules = response.data && Array.isArray(response.data.data) ? response.data.data : [];

        const fetchedCourses: Course[] = modules.map((item: any) => ({
          id: item.id,
          title: item.attributes.title,
          description: item.attributes.description,
          // Pastikan URL gambar lengkap, tambahkan BASE_URL jika perlu
          image: item.attributes.thumbnail?.data?.attributes?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${item.attributes.thumbnail.data.attributes.url}`
            : "/farming.jpg", // Fallback image jika tidak ada thumbnail dari Strapi
          category: item.attributes.category || "Umum", // Asumsi ada field 'category' atau default
          row: item.attributes.row || 1, // Asumsi ada field 'row' atau default ke 1
        }))

        setCoursesData(fetchedCourses)
      } catch (err: any) {
        console.error("Error fetching courses:", err)
        setError(err.message || "Terjadi kesalahan saat mengambil data kursus.")
        setCoursesData([]) // Pastikan data kosong jika ada error
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto mb-12 text-center">
          <p>Memuat kursus...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto mb-12 text-center">
          <p className="text-red-500">Error: {error}</p>
          <p>Gagal memuat kursus. Silakan coba lagi nanti.</p>
        </div>
      </section>
    )
  }

  // Filter courses by row
  const row1Courses = coursesData.filter((course) => course.row === 1)
  const row2Courses = coursesData.filter((course) => course.row === 2)

  return (
    <section className="py-16 bg-white">
      {/* Header dalam container */}
      <div className="container px-4 mx-auto mb-12">
        <SectionHeader title="Temukan Kelas sesuai dengan Kebutuhanmu" />
      </div>      {/* Scrollable container dengan hidden scrollbar */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        <div className="container mx-auto" style={{ maxWidth: "1550px" }}>
          <div className="grid grid-rows-2 gap-6 pb-4 pl-4 pr-4" style={{ width: "max-content" }}>
            {/* Row 1 */}
            <div className="flex gap-6">
              {row1Courses.map((course) => (
                <div key={course.id} className="w-[270px] flex-shrink-0">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    category={course.category}
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-6">
              {row2Courses.map((course) => (
                <div key={course.id} className="w-[270px] flex-shrink-0">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    category={course.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
