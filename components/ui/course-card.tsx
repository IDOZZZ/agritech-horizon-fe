import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  image: string
  category: string
}

export default function CourseCard({ title, description, image, category }: CourseCardProps) {
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
            <Link
              href="#"
              className="w-full px-4 py-2 text-sm font-medium text-center text-white transition-colors bg-green-700 rounded hover:bg-green-600"
            >
              Belajar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
