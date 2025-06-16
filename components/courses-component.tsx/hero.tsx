import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/farmer-1.jpg"
              alt="Hands in gloves handling small green plants and seedlings"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 space-y-6 lg:order-2">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading lg:text-5xl">
            Tingkatkan Keahlian Pertanianmu bersama kami
          </h1>

          <p className="text-lg leading-relaxed text-gray-600">
            Kursus lengkap dan praktis untuk semua level, dari pemula hingga profesional. Belajar sesuai ritme dan
            kebutuhanmu.
          </p>

          <div className="pt-4">
            <button className="px-8 py-3 font-medium text-white transition-colors bg-[var(--color-brand)] rounded-lg hover:bg-[var(--color-brand-hover)]">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
