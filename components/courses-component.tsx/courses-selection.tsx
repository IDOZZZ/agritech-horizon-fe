"use client"

import { useState, useEffect } from "react"
import CourseCard from "@/components/ui/course-card"
import SectionHeader from "@/components/ui/section-header"
import { httpRequest } from "@/lib/http" // Import httpRequest

interface Course {
  id: number; // Keep original ID for key, but use documentId for routing
  documentId: string; // Add documentId for routing
  title: string;
  description: string;
  image: string; // URL gambar dari Strapi
  category: string;
  row: number; // Untuk pengelompokan baris
}

export default function CourseSelection() {
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Revert to using /api/modules endpoint as it's intended for public course listing
        const response = await httpRequest("/api/modules?populate=thumbnail", {
          method: "GET",
        });

        if (response.error) {
          setError(response.message || "Gagal mengambil data kursus.");
          setCoursesData([]);
          return;
        }

        // Assuming Strapi response for /api/modules is an array of modules
        const modules = response.data && Array.isArray(response.data) ? response.data : [];

        const fetchedCourses: Course[] = modules.map((item: any) => ({
          id: item.id,
          documentId: item.documentId, // Directly access documentId from item
          title: item.title, // Directly access title from item
          description: item.description, // Directly access description from item
          image: item.thumbnail?.formats?.large?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${item.thumbnail.formats.large.url}`
            : item.thumbnail?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${item.thumbnail.url}`
            : "/farming.jpg", // Fallback image
          category: item.category || "Umum", // Directly access category from item
          row: item.row || 1, // Directly access row from item
        }));

        setCoursesData(fetchedCourses);
        console.log("Fetched courses data:", fetchedCourses);
      } catch (err: any) {
        console.error("Error fetching courses:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data kursus.");
        setCoursesData([]);
      } finally {
        setIsLoading(false);
        console.log("Loading finished. Is loading:", false);
      }
    };

    fetchCourses();
  }, []);

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
                    id={course.id} // Teruskan ID modul
                    documentId={course.documentId} // Teruskan documentId
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
                    id={course.id} // Teruskan ID modul
                    documentId={course.documentId} // Teruskan documentId
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
