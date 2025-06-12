import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Horizon - Platform Pertanian Modern",
  description: "Login and Register for Horizon community platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
