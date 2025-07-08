"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StudySection } from "@/components/ui/study-section"
import { httpRequest } from '@/lib/http'; // Import httpRequest

interface MainModuleData {
  title: string;
  description: string;
  image: string;
  slug: string; // Add slug to the interface
}

const studyData = [
  {
    number: 1,
    title: "Pengenalan Media Tanam dalam Hidroponik",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pretium risus accumsan dictum tempor elit. Donec feugiat ut dignissim ut magna sit molestie pretium sed elit rhoncus cursus orci in. Viverra rhoncus. Lorem ipsum dolor sit amet.",
    categories: [
      {
        id: "definisi-fungsi-media-tanam",
        title: "Definisi dan fungsi media tanam dalam sistem hidroponik",
      },
      {
        id: "peran-media-tanam",
        title: "Peran media tanam dalam mendukung pertumbuhan tanaman",
      },
    ],
  },
  {
    number: 2,
    title: "Jenis - jenis Media Tanam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pretium risus accumsan dictum tempor elit. Donec feugiat ut dignissim ut magna sit molestie pretium sed elit rhoncus cursus orci in. Viverra rhoncus. Lorem ipsum dolor sit amet.",
    categories: [
      {
        id: "cocopeat",
        title: "Cocopeat",
      },
      {
        id: "media-organik",
        title: "Media organik lainnya",
      },
      {
        id: "rockwool",
        title: "Rockwool",
      },
      {
        id: "kerikil-keramzit",
        title: "Kerikil kecil dan keramzit",
      },
      {
        id: "media-anorganik-lain",
        title: "Media anorganik lainnya",
      },
    ],
  },
  {
    number: 3,
    title: "Memilih Media Tanam yang Tepat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pretium risus accumsan dictum tempor elit. Donec feugiat ut dignissim ut magna sit molestie pretium sed elit rhoncus cursus orci in. Viverra rhoncus. Lorem ipsum dolor sit amet.",
    categories: [
      {
        id: "kriteria-pemilihan",
        title: "Kriteria pemilihan media tanam",
      },
      {
        id: "faktor-pertimbangan",
        title: "Faktor-faktor yang perlu dipertimbangkan",
      },
    ],
  },
  {
    number: 4,
    title: "Perawatan dan Penggantian Media Tanam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pretium risus accumsan dictum tempor elit. Donec feugiat ut dignissim ut magna sit molestie pretium sed elit rhoncus cursus orci in. Viverra rhoncus. Lorem ipsum dolor sit amet.",
    categories: [
      {
        id: "cara-perawatan",
        title: "Cara merawat media tanam hidroponik",
      },
      {
        id: "waktu-penggantian",
        title: "Kapan waktu yang tepat untuk mengganti media tanam",
      },
    ],
  },
]

export default function HydroponicStudyGuide() {
  const [mainModuleData, setMainModuleData] = useState<MainModuleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMainModuleData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

        // Fetch published modules based on the user's specified endpoint
        const response = await httpRequest(`/api/modules?filters[module_status][$eq]=Published&populate=category`, {
          method: "GET",
          headers: headers,
        });

        if (response.error) {
          setError(response.message || "Gagal mengambil data modul.");
          setMainModuleData(null);
          return;
        }

        // Log the raw response to the console for debugging
        console.log("API Response:", response);

        // Get the first module from the response array, which has no 'attributes' layer
        const moduleData = response.data && Array.isArray(response.data) && response.data.length > 0 ? response.data[0] : null;

        if (moduleData) {
          setMainModuleData({
            title: moduleData.title,
            description: moduleData.description,
            slug: moduleData.slug,
            // Using fallback image as the endpoint data does not contain an image URL
            image: "/farming.jpg",
          });
        } else {
          setError("Data modul tidak ditemukan atau tidak valid.");
          setMainModuleData(null);
        }

      } catch (err: any) {
        console.error("Error fetching main module data:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data modul utama.");
        setMainModuleData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMainModuleData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Memuat konten...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
        <p>Gagal memuat konten. Silakan coba lagi nanti.</p>
      </div>
    );
  }

  if (!mainModuleData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Konten tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-4xl px-6 py-8 mx-auto">
        {/* Header Image and Introduction */}
        <div className="mb-8">
          <div className="mb-6">
            <Image
              src={mainModuleData.image}
              alt={mainModuleData.title}
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{mainModuleData.title}</h1>
          <p className="mb-6 text-base leading-relaxed text-[#000000]">
            {mainModuleData.description}
          </p>
          <Button className="px-6 py-2 text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">Belajar Sekarang</Button>
        </div>

        {/* Study Sections */}
        <div className="space-y-0">
          {studyData.map((section) => (
            <StudySection
              key={section.number}
              number={section.number}
              title={section.title}
              description={section.description}
              categories={section.categories}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="py-8 mt-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Tingkatkan Kemampuanmu Bersama Kami</h2>
          <p className="max-w-2xl mb-6 text-base leading-relaxed text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pretium risus accumsan dictum tempor
            elit. Donec feugiat ut dignissim ut magna sit molestie pretium sed elit rhoncus cursus orci in. Viverra
            rhoncus. Lorem ipsum dolor sit amet.
          </p>
          <Button className="px-6 py-2 font-semibold text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">
            Belajar Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}
