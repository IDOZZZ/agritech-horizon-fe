"use client"

import { useState } from "react"
import { Card } from "../ui/card"
import WelcomeSlider from "./AuthWelcome"
import AuthForm from "./AuthForm"

export default function AuthLayout() {
  const [authMode, setAuthMode] = useState<"login" | "register">("register")

  return (
    <div className="min-h-screen bg-[#e6f7f2] flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border-0 flex flex-col lg:flex-row p-0">
        {/* Left: Welcome Slider */}
        <div className="flex-[1.1] flex items-center justify-center min-h-[600px] p-0">
          <WelcomeSlider />
        </div>
        {/* Right: Auth Form */}
        <div className="flex-[1.2] flex items-center justify-center bg-white p-8 lg:p-16">
          <div className="w-full max-w-lg">
            <AuthForm mode={authMode} onModeChange={setAuthMode} />
          </div>
        </div>
      </Card>
    </div>
  )
}
