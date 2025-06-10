"use client"

import { useState, useEffect } from "react"
import WelcomeSlider from "@/components/auth/AuthWelcome"
import AuthForm from "@/components/auth/AuthForm"

export default function AuthLayout() {
  const [authMode, setAuthMode] = useState<"login" | "register">("register")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      window.location.href = "/courses"
    }
  }, [])

  return (
  <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-5xl overflow-hidden bg-white border border-gray-100 shadow-xl card rounded-3xl">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <WelcomeSlider />
          <AuthForm mode={authMode} onModeChange={setAuthMode} />
        </div>

      </div>
    </div>
  )
}
