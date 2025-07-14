import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/img/Category_header_img.jpg"
              alt="Hands in gloves handling small green plants and seedlings"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 space-y-6 lg:order-2">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900 font-heading" style={{ lineHeight: '120%' }}>
            Tingkatkan Keahlian Pertanianmu bersama kami
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-black" style={{ lineHeight: '120%' }}>
            Kursus lengkap dan praktis untuk semua level, dari pemula hingga profesional. Belajar sesuai ritme dan
            kebutuhanmu.
          </p>
        </div>
      </div>
    </section>
  )
}
