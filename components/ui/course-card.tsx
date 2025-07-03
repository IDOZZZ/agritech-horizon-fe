"use client" // Tambahkan use client karena menggunakan useState dan useRouter

import Image from "next/image"
// import Link from "next/link"
import { useRouter } from "next/navigation" // Import useRouter
import { useState, useEffect } from "react" // Import useState dan useEffect

interface CourseCardProps {
  id: number; // Keep original ID for key
  documentId: string; // Add documentId for routing
  title: string;
  description: string;
  image: string;
  category: string;
}

// documentId,, category

export default function CourseCard({ id,  title, description, image }: CourseCardProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleBelajarSekarangClick = () => {
    if (isAuthenticated) {
router.push(`/sylabus/${id}`); // Arahkan ke halaman silabus detail dengan id
    } else {
      router.push("/login"); // Arahkan ke halaman login jika belum login
    }
  };

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />

      {/* Content dengan efek glassmorphism dalam kotak */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        {/* Glassmorphism container yang tidak menyentuh ujung */}
        <div className="p-4 text-white rounded-lg backdrop-blur-sm bg-black/40">
          <h3 className="mb-1 text-xl font-bold">{title}</h3>
          <p className="mb-3 text-xs text-gray-200 line-clamp-2">{description}</p>

          {/* Button Container */}
          <div className="flex items-center">
            <button // Ubah Link menjadi button
              onClick={handleBelajarSekarangClick}
              className="w-full px-4 py-2 text-sm font-medium text-center text-white transition-colors rounded bg-[var(--color-brand)] hover:bg-[var(--color-brand)]/90"
            >
              Belajar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
