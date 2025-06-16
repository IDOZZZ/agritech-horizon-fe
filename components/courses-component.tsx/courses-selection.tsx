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
        console.log("Response from Strapi:", response.data); // Log response untuk debugging
        const modules = response.data && Array.isArray(response.data) ? response.data : [];

        const fetchedCourses: Course[] = modules.map((item: any) => ({
          id: item.id,
          title: item.title, // Akses langsung dari item
          description: item.description, // Akses langsung dari item
          // Pastikan URL gambar lengkap, ambil dari formats.large.url atau langsung url
          image: item.thumbnail?.formats?.large?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${item.thumbnail.formats.large.url}`
            : item.thumbnail?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${item.thumbnail.url}`
            : "/farming.jpg", // Fallback image jika tidak ada thumbnail dari Strapi
          category: item.category || "Umum", // Akses langsung dari item atau default
          row: item.row || 1, // Akses langsung dari item atau default
        }))

        setCoursesData(fetchedCourses)
        console.log("Fetched courses data:", fetchedCourses); // Log data yang berhasil diambil
      } catch (err: any) {
        console.error("Error fetching courses:", err)
        setError(err.message || "Terjadi kesalahan saat mengambil data kursus.")
        setCoursesData([]) // Pastikan data kosong jika ada error
      } finally {
        setIsLoading(false)
        console.log("Loading finished. Is loading:", false); // Log status loading
      }
    }

    fetchCourses()
  }, [])

  console.log("Current coursesData state:", coursesData); // Log state saat ini
  console.log("Current isLoading state:", isLoading); // Log state saat ini
  console.log("Current error state:", error); // Log state saat ini

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
