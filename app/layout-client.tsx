"use client"

import { usePathname } from "next/navigation"
import { ToastContainer } from "react-toastify"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register"

  return (
    <>
      <ToastContainer />
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  )
}
