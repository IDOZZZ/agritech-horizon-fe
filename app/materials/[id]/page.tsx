"use client"

import { useState, useEffect } from "react"
import { SectionOverview } from "@/components/materials/section-overview"
import { SectionList } from "@/components/materials/section-list"
import { ContentArea } from "@/components/materials/content-area"
import { useParams } from "next/navigation"
import { httpRequest } from "@/lib/http"
import { BASE_URL } from "@/lib/http";
import ReactMarkdown from 'react-markdown';
import { List } from '@phosphor-icons/react';

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

interface ContentBlock {
  id: number;
  __component: string;
  body: string;
}

interface MaterialContent {
  id: number;
  documentId: string;
  title: string;
  content_blocks: ContentBlock[];
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
      };
    };
  };
  modules: ModuleData[];
}

export default function MaterialDetailPage() {
  const params = useParams()
  const materialDocumentId = params.id as string

  const [categoryData, setCategoryData] = useState<CategoryData | null>(null)
  const [currentMaterial, setCurrentMaterial] = useState<MaterialContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [sections, setSections] = useState<Section[]>([])
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [activeSubsection, setActiveSubsection] = useState<string>("")
  const [viewedSubsections, setViewedSubsections] = useState<Set<string>>(new Set())
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!materialDocumentId) {
      setIsLoading(false);
      setError("ID Materi tidak ditemukan di URL.");
      return;
    }

    const fetchMaterialAndCategoryData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await httpRequest(
          `/api/categories?populate[modules][populate][materials][populate]=content_blocks&populate[thumbnail][populate]=*`,
          { method: "GET" }
        );

        if (response.error) {
          throw new Error(response.message || "Gagal mengambil data kategori.");
        }

        const categories = response.data && Array.isArray(response.data) ? response.data : [];
        let foundCategory: CategoryData | null = null;
        let foundMaterial: MaterialContent | null = null;

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

          const mappedSections: Section[] = foundCategory.modules.map((module: ModuleData) => ({
            id: `module-${module.id}`,
            title: module.title,
            subtitle: module.description,
            completed: false,
            subsections: module.materials.map((material: MaterialContent) => ({
              id: `${module.id}.${material.id}`,
              title: material.title,
              completed: false,
              viewed: false,
              content: material.content_blocks?.map(block => block.body).join('\n\n') || '',
            })),
          }));
          setSections(mappedSections);

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
        }
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan saat mengambil data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterialAndCategoryData();
  }, [materialDocumentId]);

  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        const allSubsectionsViewed = section.subsections.every((sub) => viewedSubsections.has(sub.id));
        return {
          ...section,
          completed: allSubsectionsViewed,
          subsections: section.subsections.map((sub) => ({
            ...sub,
            viewed: viewedSubsections.has(sub.id),
            completed: viewedSubsections.has(sub.id),
          })),
        };
      }),
    );
  }, [viewedSubsections]);

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const selectSubsection = (subsectionId: string) => {
    const moduleId = subsectionId.split('.')[0];
    setExpandedSections((prev) => ({ ...prev, [`module-${moduleId}`]: true }));
    setActiveSubsection(subsectionId);
    setViewedSubsections((prev) => new Set([...prev, subsectionId]));

    const material = categoryData?.modules
      .flatMap(m => m.materials)
      .find(mat => `${categoryData?.modules.find(m => m.materials.some(material => material.id === mat.id))?.id}.${mat.id}` === subsectionId);
    
    if (material) {
        setCurrentMaterial(material);
    }
  };

  const allSubsections = sections.flatMap((section) => section.subsections.map((sub) => sub.id));
  const currentIndex = allSubsections.indexOf(activeSubsection);

  const navigateToNext = () => {
    if (currentIndex < allSubsections.length - 1) {
      selectSubsection(allSubsections[currentIndex + 1]);
    }
  };

  const navigateToPrevious = () => {
    if (currentIndex > 0) {
      selectSubsection(allSubsections[currentIndex - 1]);
    }
  };

  const navigateToNextModule = () => {
    alert("Navigating to next module: Sistem Nutrisi Hidroponik");
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><p>Memuat materi...</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen"><p className="text-red-500">Error: {error}</p></div>;
  }

  if (!categoryData || !currentMaterial) {
    return <div className="flex items-center justify-center min-h-screen"><p>Materi atau Kategori tidak ditemukan.</p></div>;
  }

  const currentSection = sections.find((section) => section.subsections.some((sub) => sub.id === activeSubsection));
  const currentContent = {
    title: currentMaterial?.title || "Konten Tidak Ditemukan",
    content: currentMaterial?.content_blocks?.map(block => block.body).join('\n\n') || "<p>Silakan pilih sub-bagian untuk melihat konten.</p>",
  };
  const categoryThumbnailUrl = categoryData.thumbnail?.data?.attributes?.url
    ? `${BASE_URL}${categoryData.thumbnail.data.attributes.url}`
    : undefined;

  const SidebarContent = () => (
    <>
      <SectionOverview sections={sections} />
      <SectionList
        sections={sections}
        expandedSections={expandedSections}
        activeSubsection={activeSubsection}
        onToggleSection={toggleSection}
        onSelectSubsection={selectSubsection}
      />
    </>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="w-96 bg-white border-r border-gray-200 overflow-y-auto p-6">
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto pt-16">
        <ContentArea
          sectionTitle={categoryData.name}
          sectionSubtitle={currentSection?.title || ""}
          contentTitle={currentContent.title}
          contentBody={currentContent.content}
          currentProgress={viewedSubsections.size}
          totalProgress={allSubsections.length}
          canGoPrevious={currentIndex > 0}
          canGoNext={currentIndex < allSubsections.length - 1}
          isLastSubsection={currentIndex === allSubsections.length - 1}
          onPrevious={navigateToPrevious}
          onNext={navigateToNext}
          onNextModule={navigateToNextModule}
          thumbnailUrl={categoryThumbnailUrl}
        />
      </main>

      {/* Mobile slide-in sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/30" onClick={() => setIsSidebarOpen(false)}></div>
        <div className="fixed top-0 left-0 h-full w-80 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          <SidebarContent />
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      {!isSidebarOpen && (
        <button
          className="fixed top-20 left-0 bg-gray-800 text-white p-3 rounded-r-full shadow-lg z-40 md:hidden"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Buka Menu Sidebar"
        >
          <List size={24} weight="bold" />
        </button>
      )}
    </div>
  );
}
