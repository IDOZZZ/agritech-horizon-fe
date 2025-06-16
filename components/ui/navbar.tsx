"use client"

import Link from "next/link"
import { Bell, UserCircle, List } from "@phosphor-icons/react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const isLandingPage = pathname === "/" || pathname === "/landing-page"

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token")
      setIsAuthenticated(!!token)
    }
    checkAuth()
    // Add event listener for storage changes to handle login/logout in other tabs
    window.addEventListener("storage", checkAuth)
    return () => {
      window.removeEventListener("storage", checkAuth)
    }
  }, [])

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
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/consultation", label: "Consultation" },
    { path: "/our-course", label: "Our Course" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300 border-gray-200 shadow-sm backdrop-blur-md bg-white/70"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo-horizon-1.png" alt="Logo" className="h-8" />
          </Link>

          {/* Navigation Links - Hidden on Mobile */}
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
          </div>          {/* Right Side Items */}
          <div className="flex items-center gap-5">
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-600 transition-colors md:hidden hover:text-[var(--color-brand)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <List size={24} weight="regular" />
            </button>

            {!isAuthenticated ? (
              // Login and Register buttons for non-authenticated users
              <div className="items-center hidden gap-4 md:flex">
                <Link
                  href="/login"
                  className="px-6 py-2 text-[var(--color-brand)] hover:bg-[var(--color-brand)]/5 rounded-sm transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 text-white bg-[var(--color-brand)] rounded-sm hover:bg-[var(--color-brand)]/90 transition-colors"
                >
                  Register
                </Link>
              </div>
            ) : (
              // Logged in user features
              <>
                <button
                  className="relative hidden p-2 text-gray-600 transition-colors md:block hover:text-[var(--color-brand)]"
                  aria-label="Notifications"
                >
                  <Bell size={24} weight="regular" />
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                    3
                  </span>
                </button>

                <div className="hidden px-4 py-1.5 text-sm font-medium md:block text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full">
                  24 Points
                </div>                
                <div className="relative hidden group md:block">
                  <button
                    className="text-gray-600 transition-colors hover:text-[var(--color-brand)]"
                    aria-label="User profile"
                  >
                    <UserCircle size={32} weight="regular" />
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute right-0 invisible w-48 py-2 mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
                    {isAuthenticated && (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <UserCircle size={40} weight="regular" className="text-gray-600" />
                            <div className="text-sm">
                              <p className="font-semibold text-gray-700">Ahmad Fauzi</p>
                              <p className="text-gray-500">ahmad@example.com</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-600">🏠</span>
                            Dashboard
                          </a>
                          <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-600">👤</span>
                            Profil Saya
                          </a>
                          <a href="/my-courses" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-600">📚</span>
                            Daftar Kelas
                          </a>
                          <a href="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-600">🛒</span>
                            Daftar Pesanan
                          </a>
                          <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-600">⚙️</span>
                            Pengaturan
                          </a>
                          <div className="mt-2 border-t border-gray-100">
                            <button 
                              onClick={() => {
                                localStorage.removeItem("token");
                                document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                                window.location.href = "/landing-page";
                              }} 
                              className="flex items-center w-full gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <span>🚪</span>
                              Keluar
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-2 text-gray-600 transition-colors hover:text-[var(--color-brand)] ${
                  activeLink === link.path ? "text-[var(--color-brand)] bg-[var(--color-brand)]/5" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}            {/* Mobile Menu Additional Items */}
            <div className="px-4 pt-4 mt-4 space-y-4 border-t">
              {!isAuthenticated ? (
                // Login and Register buttons for mobile
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="w-full px-4 py-2 text-center text-[var(--color-brand)] hover:bg-[var(--color-brand)]/5 rounded-sm transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="w-full px-4 py-2 text-center text-white bg-[var(--color-brand)] rounded-sm hover:bg-[var(--color-brand)]/90 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                // Logged in user features for mobile
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--color-brand)]">24 Points</span>
                    <button
                      className="relative p-2 text-gray-600 transition-colors hover:text-[var(--color-brand)]"
                      aria-label="Notifications"
                    >
                      <Bell size={24} weight="regular" />
                      <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                        3
                      </span>
                    </button>
                  </div>
                  <div className="py-2 space-y-1">
                    <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="text-gray-600">🏠</span>
                      Dashboard
                    </a>
                    <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="text-gray-600">👤</span>
                      Profil Saya
                    </a>
                    <a href="/my-courses" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="text-gray-600">📚</span>
                      Daftar Kelas
                    </a>
                    <a href="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="text-gray-600">🛒</span>
                      Daftar Pesanan
                    </a>
                    <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="text-gray-600">⚙️</span>
                      Pengaturan
                    </a>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <button 
                        onClick={() => {
                          localStorage.removeItem("token");
                          document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                          window.location.href = "/landing-page";
                        }} 
                        className="flex items-center w-full gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <span>🚪</span>
                        Keluar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

