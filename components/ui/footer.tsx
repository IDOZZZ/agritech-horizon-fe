import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-6 md:grid-cols-4">
          {/* Logo dan Deskripsi */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 bg-green-600 rounded">
                <span className="text-xs font-bold text-white">L</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Logoipsum</span>
            </div>
            <p className="pr-4 text-xs leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-3">
            <div className="space-y-1 text-xs text-gray-700">
              <p className="font-medium">+6281234567890</p>
              <p>hello@logoipsum.com</p>
            </div>
            <div className="text-xs leading-relaxed text-gray-600">
              <p>Jl. Sinar Baru No. 89,</p>
              <p>BSD City, Tangerang Selatan, 15339</p>
              <p>Indonesia</p>
            </div>
          </div>

          {/* Navigasi */}
          <div className="space-y-3">
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-xs text-gray-700 transition-colors hover:text-green-600">
                About Us
              </Link>
              <Link href="/consultants" className="text-xs text-gray-700 transition-colors hover:text-green-600">
                Consultation
              </Link>
              <Link href="/classes" className="text-xs text-gray-700 transition-colors hover:text-green-600">
                Our Class
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Kirim Pesan pada Kami</h3>
            <form className="space-y-4">
              {/* Email Input dengan underline */}
              <div className="space-y-1">
                <input
                  type="email"
                  placeholder="Alamat Email Anda"
                  className="w-full pb-1 text-xs placeholder-gray-500 bg-transparent border-0 border-b border-gray-400 focus:border-gray-600 focus:outline-none"
                />
              </div>

              {/* Message Input dengan underline */}
              <div className="space-y-1">
                <textarea
                  placeholder="Ketik Pesan"
                  rows={3}
                  className="w-full pb-1 text-xs placeholder-gray-500 bg-transparent border-0 border-b border-gray-400 resize-none focus:border-gray-600 focus:outline-none"
                />
              </div>

              {/* Button dengan border */}
              <Button
                variant="outline"
                className="h-8 px-4 text-xs text-gray-700 border-gray-400 rounded-full hover:bg-gray-50"
              >
                Kirim →
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media dan Copyright */}
        <div className="flex flex-col items-start justify-between pt-4 space-y-3 border-t border-gray-300 md:flex-row md:items-center md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-2">
            <Link
              href="#"
              className="flex items-center justify-center w-6 h-6 transition-colors bg-gray-800 rounded hover:bg-gray-700"
            >
              <span className="text-xs font-bold text-white">G</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-6 h-6 transition-colors bg-gray-800 rounded hover:bg-gray-700"
            >
              <Facebook className="w-3 h-3 text-white" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-6 h-6 transition-colors bg-gray-800 rounded hover:bg-gray-700"
            >
              <Instagram className="w-3 h-3 text-white" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-6 h-6 transition-colors bg-gray-800 rounded hover:bg-gray-700"
            >
              <MessageCircle className="w-3 h-3 text-white" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-6 h-6 transition-colors bg-gray-800 rounded hover:bg-gray-700"
            >
              <Linkedin className="w-3 h-3 text-white" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">Copyright © 2024 BSA Templates | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
