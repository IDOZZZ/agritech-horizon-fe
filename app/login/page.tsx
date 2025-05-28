"use client"

import { useState } from "react"
import WelcomeSlider from "@/components/auth/AuthWelcome"
import AuthForm from "@/components/auth/AuthForm"

export default function AuthLayout() {
  const [authMode, setAuthMode] = useState<"login" | "register">("register")

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="card w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <WelcomeSlider />
          <AuthForm mode={authMode} onModeChange={setAuthMode} />
        </div>
      </div>
    </div>
  )
}
