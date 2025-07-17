"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { httpRequest } from '@/lib/http';

interface CategoryData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const localImages = [
  "/img/jagung.png",
  "/img/selada.png",
  "/img/strawberry-farmer.jpeg",
  "/img/tanaman.png",
  "/img/rice-farmer.jpg",
];

const ClassList = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await httpRequest("/api/categories", { method: "GET" }); 
        if (response.error) {
          setError(response.message);
        } else {
          setCategories(response.data);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="self-stretch py-10 md:py-20 bg-white flex-col justify-center items-center gap-6 flex">
        <div className="text-black text-2xl">Loading categories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="self-stretch py-10 md:py-20 bg-white flex-col justify-center items-center gap-6 flex">
        <div className="text-red-500 text-2xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="self-stretch py-10 md:py-20 bg-white overflow-hidden flex-col justify-start items-center gap-6 flex">
      <div className="w-full flex-col justify-start items-center md:items-start gap-10 flex px-4 md:px-20">
        <div className="w-full max-w-4xl flex-col justify-start items-center md:items-start gap-4 flex text-center md:text-left">
          <div className="w-full text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-['Metropolis'] leading-tight">
            Kelas tersedia, belajar bersama kami
          </div>
          <div className="self-stretch text-black text-base md:text-lg lg:text-2xl font-normal font-['Manrope'] leading-normal md:leading-7">
            Temukan berbagai kelas pertanian yang dirancang untuk membantu Anda menguasai teknik budidaya, pengelolaan hama, hingga pemasaran hasil panen.
          </div>
        </div>
        <div className="self-stretch flex justify-center md:justify-end items-center gap-3">
          <Link href="#" className="w-fit px-6 py-2 bg-white rounded-sm outline-2 outline-offset-2 outline-black gap-3.5 flex items-center">
            <ArrowLeft size={32} weight='bold' />
          </Link>
          <Link href="#" className="w-fit px-6 py-2 bg-black rounded-sm outline-2 outline-offset-2 outline-black gap-3.5 flex items-center">
            <ArrowRight size={32} weight='bold' className="text-white" />
          </Link>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {categories.map((item, index) => (
          <div
            key={item.id}
            className="relative w-full max-w-sm h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 flex-col justify-end items-center gap-2.5 flex overflow-hidden rounded-sm"
          >
            <Image
              src={localImages[index % localImages.length]}
              alt={`Ilustrasi kelas ${item.name}`}
    fill
    className="object-cover rounded-sm"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index === 0}
            />
            <div className="w-full p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex z-10">
              <div className="w-full flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-xl md:text-2xl font-bold font-['Metropolis'] leading-tight">
                  {item.name}
                </div>
                <div className="self-stretch text-white text-sm md:text-base font-normal font-['Manrope'] leading-tight">
                  {item.description}
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <Link href={`/courses?category=${item.id}`} className="w-full p-2.5 bg-[#0F5028] rounded-sm flex justify-center items-center">
                  <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                </Link>
                <div className="bg-[#E3FAEC] rounded-sm flex justify-center items-center p-2">
                  <ArrowUpRight size={32} weight='bold' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;
