import { Manrope } from "next/font/google"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"
import { metadata } from './metadata'
import LayoutClient from './layout-client'

const manrope = Manrope({ subsets: ["latin"] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={manrope.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
