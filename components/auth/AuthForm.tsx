"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { httpRequest } from "@/lib/http"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface AuthFormProps {
  mode?: "login" | "register"
  onModeChange?: (mode: "login" | "register") => void
}

export default function AuthForm({ mode = "register", onModeChange }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(mode === "login")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleModeToggle = () => {
    const newMode = isLogin ? "register" : "login"
    setIsLogin(!isLogin)
    onModeChange?.(newMode)
    // Reset form when switching modes
    setFormData({ name: "", email: "", password: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    // Reset showPassword state when password input is cleared
    if (name === "password" && value === "") {
      setShowPassword(false)
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null) // Reset error message

    // Validate email format
    if (!validateEmail(formData.email)) {
      setErrorMessage("Format email tidak valid.") // Show error as toast notification
      setIsLoading(false)
      return
    }

    // Validate password length
    if (!validatePassword(formData.password)) {
      setErrorMessage("Kata sandi harus memiliki minimal 6 karakter.")
      setIsLoading(false)
      return
    }

    // Ensure all required fields are filled
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      setErrorMessage("Semua bidang harus diisi.")
      setIsLoading(false)
      return
    }

    try {
      const endpoint = isLogin ? "/api/auth/local" : "/api/auth/local/register";
      const payload = isLogin
        ? { identifier: formData.email, password: formData.password }
        : { username: formData.name, email: formData.email, password: formData.password };

      // console.log("Payload to send:", payload);
      const data = await httpRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (data.error) {
        const userFriendlyMessage = data.message.includes("email")
          ? "Email tidak valid atau sudah digunakan."
          : data.message.includes("password")
          ? "Password terlalu pendek atau tidak memenuhi syarat."
          : data.message.includes("username")
          ? "Nama pengguna sudah ada, silakan gunakan nama lain."
          : "Terjadi kesalahan, silakan coba lagi.";
        setErrorMessage(userFriendlyMessage); // Set user-friendly error message
        return;
      }
      
      console.log("Form submitted successfully:", data);

      if (isLogin) {
        localStorage.setItem("token", data.jwt); // Store JWT token for authenticated requests
        setErrorMessage(null); // Clear any previous error messages
      }

      // Display success message in UI instead of toast
      setErrorMessage(isLogin ? "Login berhasil!" : "Registrasi berhasil!");
      setTimeout(() => {
        window.location.href = isLogin ? "/courses" : "/login"; // Redirect to courses or login page based on mode
      }, 2000);
    } catch (error) {
      console.error("Error caught in handleSubmit:", error);
      setErrorMessage("Terjadi kesalahan yang tidak diketahui, silakan coba lagi.");
      toast.error("Terjadi kesalahan yang tidak diketahui, silakan coba lagi.");
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialAuth = (provider: string) => {
    console.log(`${isLogin ? "Login" : "Register"} with ${provider}`)
    // Implement social auth logic
  }

  return (

    <div className="flex flex-col justify-center p-8 bg-white lg:p-12">
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">{isLogin ? "Selamat Datang Kembali" : "Mulai Sekarang"}</h2>
          <p className="text-gray-600">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              onClick={handleModeToggle}
              className="font-medium transition-colors text-emerald-600 hover:text-emerald-700"
              disabled={isLoading}
            >
              {isLogin ? "Daftar" : "Masuk"}
            </button>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="name" className="font-medium text-gray-700">
                Nama Lengkap
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap Anda"
                className="h-12 mt-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                required={!isLogin}
                disabled={isLoading}
              />
            </div>
          )}

          <div>
            <Label htmlFor="email" className="font-medium text-gray-700">
              Alamat Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan alamat email Anda"
              className="h-12 mt-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="password" className="font-medium text-gray-700">
              Kata Sandi
            </Label>
            <div className="relative mt-2">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"} // Dynamically switch between text and password
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Masukkan kata sandi Anda"
                className="h-12 pr-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                required
                disabled={isLoading}
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-400 transition-colors transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                disabled={isLoading}
                aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => (window.location.href = "/forgot-password")}
                className="text-sm transition-colors text-emerald-600 hover:text-emerald-700"
                disabled={isLoading}
              >
                Lupa Kata Sandi?
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] disabled:opacity-50 text-white font-medium rounded-xl transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Mohon tunggu..." : isLogin ? "Masuk" : "Buat Akun"}
          </Button>
        </form>

        {/* Error Message */}
        {errorMessage && errorMessage !== "Login berhasil!" && (
          <div className="mt-4 text-sm text-red-600">{errorMessage}</div>
        )}

        {/* Success Message */}
        {errorMessage === "Login berhasil!" && (
          <div className="mt-4 text-sm text-green-600">{errorMessage}</div>
        )}
      </div>
    </div>
  )
}
