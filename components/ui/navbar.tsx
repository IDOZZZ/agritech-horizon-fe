"use client"

import Link from "next/link"
import { Bell, UserCircle } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type NavLink = {
  path: string
  label: string
}

const Navbar = () => {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState(pathname)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  // Handle navbar visibility on scroll with improved behavior
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScroll = window.scrollY
        const scrollingDown = currentScroll > lastScrollY
        const scrolledPastThreshold = currentScroll > 100

        // Show navbar:
        // - When scrolling up
        // - When at the top of the page
        // - When scrolling down but haven't passed threshold
        if (!scrollingDown || currentScroll < 100) {
          setIsVisible(true)
        } 
        // Hide navbar:
        // - Only when scrolling down AND past threshold
        else if (scrollingDown && scrolledPastThreshold) {
          setIsVisible(false)
        }

        setLastScrollY(currentScroll)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const navLinks: NavLink[] = [
    { path: "/courses", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/consultation", label: "Consultation" },
    { path: "/our-course", label: "Our Course" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300 border-gray-200 shadow-sm backdrop-blur-md bg-white/70"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/courses" className="flex items-center">
            <img src="/logo-horizon-1.png" alt="Logo" className="h-8" />
          </Link>

          {/* Navigation Links */}
          <div className="items-center hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`relative px-6 text-gray-600 transition-colors hover:text-[var(--color-brand)] h-16 flex items-center ${
                  activeLink === link.path ? "text-[var(--color-brand)]" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 w-[calc(100%-3rem)] h-0.5 bg-[var(--color-brand)] transition-all duration-300 transform -translate-x-1/2 ${
                    activeLink === link.path ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transformOrigin: "center" }}
                ></span>
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-5">
            {/* Notification Bell */}
            <button
              className="relative p-2 text-gray-600 transition-colors hover:text-[var(--color-brand)]"
              aria-label="Notifications"
            >
              <Bell size={24} weight="regular" />
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                3
              </span>
            </button>

            {/* Points Balance */}
            <div className="px-4 py-1.5 text-sm font-medium text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full">
              24 Points
            </div>

            {/* Profile Icon */}
            <button
              className="text-gray-600 transition-colors hover:text-[var(--color-brand)]"
              aria-label="User profile"
            >
              <UserCircle size={32} weight="regular" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

