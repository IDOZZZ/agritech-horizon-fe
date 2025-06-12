"use client"

import type React from "react"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const manrope = Manrope({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"
  const isRestrictedPage = ["/login", "/"].includes(pathname)

  useEffect(() => {
    if (isRestrictedPage) {
      const token = localStorage.getItem("token")
      if (token) {
        window.location.href = "/courses" // Redirect authenticated users to courses page
      }
    }
  }, [isRestrictedPage])

  return (
    <html lang="en">
      <body className={manrope.className}>
        <ToastContainer />
        {!isLoginPage && <Navbar />}
        {children}
        {!isLoginPage && <Footer />}
      </body>
    </html>
  )
}
