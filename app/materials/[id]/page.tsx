"use client"

import { useState, useEffect } from "react"
import { SectionOverview } from "@/components/materials/section-overview"
import { SectionList } from "@/components/materials/section-list"
import { ContentArea } from "@/components/materials/content-area"
import { useContent } from "@/hooks/use-content"
import { useParams } from "next/navigation"
import { httpRequest } from "@/lib/http"

interface SubSection {
  id: string
  title: string
  completed: boolean
  viewed: boolean
}

interface Section {
  id: string
  title: string
  subtitle: string
  subsections: SubSection[]
  completed: boolean
}

interface MaterialData {
  id: number
  documentId: string
  title: string
  // Tambahkan properti lain yang relevan dari API Strapi untuk materi
  // Misalnya: content: string;
  // Jika materi memiliki struktur nested seperti sections/subsections, definisikan di sini
}

export default function MaterialDetailPage() {
  const params = useParams()
  const materialDocumentId = params.id

  const [materialData, setMaterialData] = useState<MaterialData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // State untuk struktur desain dari v0 (akan diisi dari API)
  const [sections, setSections] = useState<Section[]>([])
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [activeSubsection, setActiveSubsection] = useState<string>("")
  const [viewedSubsections, setViewedSubsections] = useState<Set<string>>(new Set())

  // Menggunakan hook useContent (akan disesuaikan nanti)
  const { getContentForSubsection } = useContent()

  useEffect(() => {
    if (!materialDocumentId) {
      setIsLoading(false)
      setError("ID Materi tidak ditemukan.")
      return
    }

    const fetchMaterialData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Endpoint API untuk mengambil detail materi
        const response = await httpRequest(`/api/materials?filters[documentId][$eq]=${materialDocumentId}&populate=*`, {
          method: "GET",
        })

        if (response.error) {
          setError(response.message || "Gagal mengambil data materi.")
          setMaterialData(null)
          return
        }

        const data = response.data && Array.isArray(response.data) ? response.data[0] : null
        if (data) {
          setMaterialData(data)

          // TODO: Map Strapi data to `sections` and `subsections` structure
          // Untuk sementara, gunakan data statis dari study-page.tsx sebagai fallback atau contoh
          // Ini perlu disesuaikan berdasarkan bagaimana data materi terstruktur di Strapi
          const staticSections = [
            {
              id: "section1",
              title: "Section 1",
              subtitle: "Pengenalan Media Tanam dalam Hidroponik",
              completed: false,
              subsections: [
                { id: "1.1", title: "Definisi dan fungsi media tanam dalam sistem hidroponik", completed: true, viewed: true },
                { id: "1.2", title: "Karakteristik media tanam yang ideal", completed: false, viewed: false },
              ],
            },
            {
              id: "section2",
              title: "Section 2",
              subtitle: "Jenis-jenis Media Tanam Hidroponik",
              completed: false,
              subsections: [
                { id: "2.1", title: "Media tanam organik", completed: false, viewed: false },
                { id: "2.2", title: "Media tanam anorganik", completed: false, viewed: false },
              ],
            },
          ];
          setSections(staticSections);
          if (staticSections.length > 0 && staticSections[0].subsections.length > 0) {
            setActiveSubsection(staticSections[0].subsections[0].id);
            setViewedSubsections(new Set([staticSections[0].subsections[0].id]));
            setExpandedSections({ [staticSections[0].id]: true });
          }

        } else {
          setError("Data materi tidak ditemukan.");
          setMaterialData(null);
        }
      } catch (err: any) {
        console.error("Error fetching material data:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data materi.");
        setMaterialData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterialData();
  }, [materialDocumentId]);

  // Get all subsection IDs in order
  const allSubsections = sections.flatMap((section) => section.subsections.map((sub) => sub.id))

  // Check if section is completed when subsections are viewed
  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        const allSubsectionsViewed = section.subsections.every((sub) => viewedSubsections.has(sub.id))
        return {
          ...section,
          completed: allSubsectionsViewed,
          subsections: section.subsections.map((sub) => ({
            ...sub,
            viewed: viewedSubsections.has(sub.id),
            completed: viewedSubsections.has(sub.id),
          })),
        }
      }),
    )
  }, [viewedSubsections])

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }))
  }

  const selectSubsection = (subsectionId: string) => {
    const sectionNumber = subsectionId.charAt(0)

    // Auto-expand the section containing this subsection
    setExpandedSections((prev) => ({
      ...prev,
      [`section${sectionNumber}`]: true,
    }))

    setActiveSubsection(subsectionId)
    setViewedSubsections((prev) => new Set([...prev, subsectionId]))
  }

  const navigateToNext = () => {
    const currentIndex = allSubsections.indexOf(activeSubsection)
    if (currentIndex < allSubsections.length - 1) {
      const nextSubsection = allSubsections[currentIndex + 1]
      const nextSectionNumber = nextSubsection.charAt(0)
      const currentSectionNumber = activeSubsection.charAt(0)

      // If moving to a different section, expand it
      if (nextSectionNumber !== currentSectionNumber) {
        setExpandedSections((prev) => ({
          ...prev,
          [`section${nextSectionNumber}`]: true,
        }))
      }

      selectSubsection(nextSubsection)
    }
  }

  const navigateToPrevious = () => {
    const currentIndex = allSubsections.indexOf(activeSubsection)
    if (currentIndex > 0) {
      const previousSubsection = allSubsections[currentIndex - 1]
      const previousSectionNumber = previousSubsection.charAt(0)
      const currentSectionNumber = activeSubsection.charAt(0)

      // If moving to a different section, expand it
      if (previousSectionNumber !== currentSectionNumber) {
        setExpandedSections((prev) => ({
          ...prev,
          [`section${previousSectionNumber}`]: true,
        }))
      }

      selectSubsection(previousSubsection)
    }
  }

  const navigateToNextModule = () => {
    // Simulate navigation to next module
    alert("Navigating to next module: Sistem Nutrisi Hidroponik")
    // In a real app, this would use router.push() or similar
    // router.push('/modules/nutrisi-hidroponik')
  }

  const currentIndex = allSubsections.indexOf(activeSubsection)
  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < allSubsections.length - 1
  const isLastSubsection = currentIndex === allSubsections.length - 1

  const currentContent = getContentForSubsection(activeSubsection)
  const currentSection = sections.find((s) => s.id === `section${activeSubsection.charAt(0)}`)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Memuat materi...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  if (!materialData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Materi tidak ditemukan.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        <SectionOverview sections={sections} />

        <SectionList
          sections={sections}
          expandedSections={expandedSections}
          activeSubsection={activeSubsection}
          onToggleSection={toggleSection}
          onSelectSubsection={selectSubsection}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <ContentArea
          sectionTitle={`Section ${activeSubsection.charAt(0)}`}
          sectionSubtitle={currentSection?.subtitle || ""}
          contentTitle={currentContent.title}
          contentBody={currentContent.content}
          currentProgress={viewedSubsections.size}
          totalProgress={allSubsections.length}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          isLastSubsection={isLastSubsection}
          onPrevious={navigateToPrevious}
          onNext={navigateToNext}
          onNextModule={navigateToNextModule}
        />
      </div>
    </div>
  )
}
