"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { httpRequest } from '@/lib/http'; // Import httpRequest

interface ModuleData {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function SylabusDetailPage() {
  const params = useParams();
  const moduleId = params.id;

  const [moduleData, setModuleData] = useState<ModuleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModuleData = async () => {
      if (!moduleId) {
        setIsLoading(false);
        setError("ID Modul tidak ditemukan.");
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await httpRequest(`/api/materials?filters[module][id][$eq]=${moduleId}&populate=module.thumbnail`, {
          method: "GET",
          headers: headers, // Add headers to the request
        });

        if (response.error) {
          setError(response.message || "Gagal mengambil data modul.");
          setModuleData(null);
          return;
        }

        // Assuming the response for materials is an array, and we want the first one
        const material = response.data && Array.isArray(response.data) && response.data.length > 0 ? response.data[0] : null;

        if (material && material.attributes && material.attributes.module && material.attributes.module.data && material.attributes.module.data.attributes) {
          const moduleAttributes = material.attributes.module.data.attributes;
          setModuleData({
            id: moduleId as string,
            title: moduleAttributes.title,
            description: moduleAttributes.description,
            image: moduleAttributes.thumbnail?.formats?.large?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${moduleAttributes.thumbnail.formats.large.url}`
              : moduleAttributes.thumbnail?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${moduleAttributes.thumbnail.url}`
              : "/farming.jpg",
          });
        } else {
          setError("Data modul tidak ditemukan atau tidak valid.");
          setModuleData(null);
        }

      } catch (err: any) {
        console.error("Error fetching module data:", err);
        setError(err.message || "Terjadi kesalahan saat mengambil data modul.");
        setModuleData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchModuleData();
  }, [moduleId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Memuat silabus...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
        <p>Gagal memuat silabus. Silakan coba lagi nanti.</p>
      </div>
    );
  }

  if (!moduleData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Silabus tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container min-h-screen p-8 mx-auto">
      <div className="rounded-lg shadow-md overflow-hidden bg-white mb-8">
        <div className="relative w-full h-64">
          <Image
            src={moduleData.image}
            alt={moduleData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">{moduleData.title}</h1>
          <p className="mb-4 text-base leading-relaxed text-[#000000]">{moduleData.description}</p>
        </div>
      </div>
      {/* Di sini Anda bisa menambahkan lebih banyak detail silabus */}
    </div>
  );
}
