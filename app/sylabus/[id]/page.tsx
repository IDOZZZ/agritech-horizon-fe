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
  slug: string;
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

        // Fetch the module by filtering the list endpoint by ID (simplifying to debug 400 error)
        const response = await httpRequest(`/api/modules?filters[id][$eq]=${moduleId}`, {
            method: "GET",
            headers: headers,
        });

        if (response.error) {
            setError(response.message || "Gagal mengambil data modul.");
            setModuleData(null);
            return;
        }

        // The response will be an array of modules, we need the first one
        const moduleList = response.data;
        const moduleData = moduleList && Array.isArray(moduleList) && moduleList.length > 0 ? moduleList[0] : null;

        if (moduleData) {
            // Data from a list endpoint does not have the .attributes wrapper
            const thumbnailUrl = moduleData.thumbnail?.data?.attributes?.formats?.large?.url || moduleData.thumbnail?.data?.attributes?.url;

            setModuleData({
                id: moduleData.id.toString(),
                title: moduleData.title,
                description: moduleData.description,
                slug: moduleData.slug,
                image: thumbnailUrl
                    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${thumbnailUrl}`
                    : "/farming.jpg", // Fallback image
            });
        } else {
            setError("Data modul tidak ditemukan atau tidak valid.");
            setModuleData(null);
        }

      } catch (err: Error | any) {
        console.error("Error fetching module data:", err);
        setError((err as Error).message || "Terjadi kesalahan saat mengambil data modul.");
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
