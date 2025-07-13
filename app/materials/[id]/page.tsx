"use client"

import { useState, useEffect } from "react"
import { SectionOverview } from "@/components/materials/section-overview"
import { SectionList } from "@/components/materials/section-list"
import { ContentArea } from "@/components/materials/content-area"
import { useParams } from "next/navigation"
import { httpRequest } from "@/lib/http"
import { BASE_URL } from "@/lib/http";
import ReactMarkdown from 'react-markdown';
import { List } from '@phosphor-icons/react'; // Import List icon

interface SubSection {
  id: string
  title: string
  completed: boolean
  viewed: boolean
  content?: string;
}

interface Section {
  id: string
  title: string
  subtitle: string
  subsections: SubSection[]
  completed: boolean
}

interface MaterialContent {
  id: number;
  documentId: string;
  title: string;
  content: string;
}

interface ModuleData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  materials: MaterialContent[];
}

interface CategoryData {
  id: number;
  documentId: string;
  name: string;
  description: string;
  thumbnail?: {
    data: {
      id: number;
      attributes: {
        url: string;
        name: string;
        // tambahkan properti lain jika diperlukan
      };
    };
  };
  modules: ModuleData[];
}

export default function MaterialDetailPage() {
  const params = useParams() // Mengambil satu ID dari URL
  const materialDocumentId = params.id as string // ID materi dari URL

  const [categoryData, setCategoryData] = useState<CategoryData | null>(null)
  const [currentMaterial, setCurrentMaterial] = useState<MaterialContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [sections, setSections] = useState<Section[]>([])
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [activeSubsection, setActiveSubsection] = useState<string>("")
  const [viewedSubsections, setViewedSubsections] = useState<Set<string>>(new Set())
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengontrol visibilitas sidebar


  useEffect(() => {
    if (!materialDocumentId) {
      setIsLoading(false);
      setError("ID Materi tidak ditemukan di URL.");
      return;
    }

    const fetchMaterialAndCategoryData = async () => {
      setIsLoading(true);
      setError(null);
      console.log("Fetching all categories to find material with documentId:", materialDocumentId);
      try {
        // Mengambil semua kategori dengan populate modules, materials, dan thumbnail
        const response = await httpRequest(
          `/api/categories?populate[modules][populate]=materials&populate=thumbnail`,
          {
            method: "GET",
          }
        );

        if (response.error) {
          setError(response.message || "Gagal mengambil data kategori.");
          setCategoryData(null);
          setCurrentMaterial(null);
          return;
        }

        const categories = response.data && Array.isArray(response.data) ? response.data : []; // Perbaikan di sini

        let foundCategory: CategoryData | null = null;
        let foundMaterial: MaterialContent | null = null;
        const mappedSections: Section[] = [];

        // Mencari materi yang cocok di antara semua kategori
        for (const category of categories) {
          for (const module of category.modules) {
            for (const material of module.materials) {
              if (material.documentId === materialDocumentId) {
                foundMaterial = material;
                foundCategory = category;
                break;
              }
            }
            if (foundMaterial) break;
          }
          if (foundMaterial) break;
        }

        if (foundCategory && foundMaterial) {
          setCategoryData(foundCategory);
          setCurrentMaterial(foundMaterial);

          // Membangun struktur sections dari kategori yang ditemukan
          foundCategory.modules.forEach((module: ModuleData) => {
            const moduleSubsections: SubSection[] = [];
            module.materials.forEach((material: MaterialContent) => {
              moduleSubsections.push({
                id: `${module.id}.${material.id}`,
                title: material.title,
                completed: false,
                viewed: false,
                content: material.content,
              });
            });

            mappedSections.push({
              id: `module-${module.id}`,
              title: module.title,
              subtitle: module.description,
              completed: false,
              subsections: moduleSubsections,
            });
          });
          setSections(mappedSections);

          // Mengatur activeSubsection dan expandedSections untuk materi yang ditemukan
          const parentModule = foundCategory.modules.find((module: ModuleData) =>
            module.materials.some((mat: MaterialContent) => mat.documentId === materialDocumentId)
          );
          if (parentModule) {
            const subsectionId = `${parentModule.id}.${foundMaterial.id}`;
            setActiveSubsection(subsectionId);
            setViewedSubsections(new Set([subsectionId]));
            setExpandedSections({ [`module-${parentModule.id}`]: true });
          }

        } else {
          setError("Materi atau Kategori tidak ditemukan.");
          setCategoryData(null);
          setCurrentMaterial(null);
        }
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data.");
        setCategoryData(null);
        setCurrentMaterial(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterialAndCategoryData();
  }, [materialDocumentId]);

  const allSubsections = sections.flatMap((section) => section.subsections.map((sub) => sub.id))

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
    const moduleId = subsectionId.split('.')[0];

    setExpandedSections((prev) => ({
      ...prev,
      [`module-${moduleId}`]: true,
    }))

    setActiveSubsection(subsectionId)
    setViewedSubsections((prev) => new Set([...prev, subsectionId]))
  }

  const navigateToNext = () => {
    const currentIndex = allSubsections.indexOf(activeSubsection)
    if (currentIndex < allSubsections.length - 1) {
      const nextSubsection = allSubsections[currentIndex + 1]
      const nextModuleId = nextSubsection.split('.')[0];
      const currentModuleId = activeSubsection.split('.')[0];

      if (nextModuleId !== currentModuleId) {
        setExpandedSections((prev) => ({
          ...prev,
          [`module-${nextModuleId}`]: true,
        }))
      }

      let nextMaterialContent: MaterialContent | null = null;
      categoryData?.modules.forEach(module => {
        module.materials.forEach(material => {
          if (`${module.id}.${material.id}` === nextSubsection) {
            nextMaterialContent = material;
          }
        });
      });

      if (nextMaterialContent) {
        setCurrentMaterial(nextMaterialContent);
        selectSubsection(nextSubsection);
      }
    }
  }

  const navigateToPrevious = () => {
    const currentIndex = allSubsections.indexOf(activeSubsection)
    if (currentIndex > 0) {
      const previousSubsection = allSubsections[currentIndex - 1]
      const previousModuleId = previousSubsection.split('.')[0];
      const currentModuleId = activeSubsection.split('.')[0];

      if (previousModuleId !== currentModuleId) {
        setExpandedSections((prev) => ({
          ...prev,
          [`module-${previousModuleId}`]: true,
        }))
      }

      let previousMaterialContent: MaterialContent | null = null;
      categoryData?.modules.forEach(module => {
        module.materials.forEach(material => {
          if (`${module.id}.${material.id}` === previousSubsection) {
            previousMaterialContent = material;
          }
        });
      });

      if (previousMaterialContent) {
        setCurrentMaterial(previousMaterialContent);
        selectSubsection(previousSubsection);
      }
    }
  }

  const navigateToNextModule = () => {
    alert("Navigating to next module: Sistem Nutrisi Hidroponik")
  }

  const currentIndex = allSubsections.indexOf(activeSubsection)
  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < allSubsections.length - 1
  const isLastSubsection = currentIndex === allSubsections.length - 1

  const currentSection = sections.find((section) =>
    section.subsections.some((sub) => sub.id === activeSubsection)
  );
  const currentSubsection = currentSection?.subsections.find(
    (sub) => sub.id === activeSubsection
  );

 const currentContent = {
    title: currentMaterial?.title || "Konten Tidak Ditemukan",
    content:  currentMaterial?.content || "<p>Silakan pilih sub-bagian untuk melihat konten.</p>",
  };

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

  if (!categoryData || !currentMaterial) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Materi atau Kategori tidak ditemukan.</p>
      </div>
    )
  }

  const categoryThumbnailUrl = categoryData.thumbnail?.data?.attributes?.url
    ? `${BASE_URL}${categoryData.thumbnail.data.attributes.url}`
    : undefined;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar untuk mobile (slide-in) dan desktop */}
      <div className={`fixed top-16 bottom-0 right-0 z-[9999] w-80 bg-white border-l border-gray-200 p-6 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:block transition-transform duration-300 ease-in-out overflow-y-auto translate-z-0`}> {/* Menyesuaikan posisi, menambahkan overflow-y-auto, dan translate-z-0 */}
        <button
          className="absolute top-4 right-4 text-gray-600 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          {/* Icon close (X) */}
          &times;
        </button>
        <SectionOverview sections={sections} />

        <SectionList
          sections={sections}
          expandedSections={expandedSections}
          activeSubsection={activeSubsection}
          onToggleSection={toggleSection}
          onSelectSubsection={selectSubsection}
        />
      </div>

      {/* Tombol sticky untuk membuka sidebar di mobile */}
      <button
        className="fixed top-1/2 right-0 -translate-y-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-l-full shadow-lg z-30 md:hidden"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Buka Menu Sidebar"
      >
        <List size={24} weight="bold" /> {/* Ikon Phosphor List */}
      </button>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <ContentArea
          sectionTitle={categoryData.name || "Kategori"}
          sectionSubtitle={categoryData.description || ""}
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
          thumbnailUrl={categoryThumbnailUrl}
        />
      </div>
    </div>
  )
}
