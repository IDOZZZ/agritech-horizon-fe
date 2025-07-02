"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { httpRequest } from "@/lib/http"
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
    setErrorMessage(null)

    if (!validateEmail(formData.email)) {
      setErrorMessage("Format email tidak valid.")
      setIsLoading(false)
      return
    }

    if (!validatePassword(formData.password)) {
      setErrorMessage("Kata sandi harus memiliki minimal 6 karakter.")
      setIsLoading(false)
      return
    }

    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      setErrorMessage("Semua bidang harus diisi.")
      setIsLoading(false)
      return
    }    try {
      const endpoint = isLogin ? "/api/auth/local" : "/api/auth/local/register";
      const payload = isLogin
        ? { identifier: formData.email, password: formData.password }
        : { username: formData.name, email: formData.email, password: formData.password };

      const data = await httpRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      }).catch(error => {
        console.error('Network error:', error);
        throw new Error('Gagal terhubung ke server. Silakan periksa koneksi internet Anda.');
      });

      if (data.error) {
        let userFriendlyMessage;
        if (data.message?.includes('Failed to fetch')) {
          userFriendlyMessage = 'Gagal terhubung ke server. Silakan periksa koneksi internet Anda.';
        } else if (data.message?.includes('email')) {
          userFriendlyMessage = 'Email tidak valid atau sudah digunakan.';
        } else if (data.message?.includes('password')) {
          userFriendlyMessage = 'Password terlalu pendek atau tidak memenuhi syarat.';
        } else if (data.message?.includes('username')) {
          userFriendlyMessage = 'Nama pengguna sudah ada, silakan gunakan nama lain.';
        } else {
          userFriendlyMessage = 'Terjadi kesalahan, silakan coba lagi nanti.';
        }
        setErrorMessage(userFriendlyMessage);
        return;
      }
      
      console.log("Form submitted successfully:", data);      if (isLogin) {
        // Store token in both localStorage and cookie
        localStorage.setItem("token", data.jwt);
        document.cookie = `token=${data.jwt}; path=/`;
        setErrorMessage(null); // Clear any previous error messages
      }

      // Display success message in UI instead of toast
      setErrorMessage(isLogin ? "Login berhasil!" : "Registrasi berhasil!");
      setTimeout(() => {
        window.location.href = isLogin ? "/landing-page" : "/login"; // Redirect to courses or login page based on mode
      }, 2000);    } catch (error) {
      console.error("Error caught in handleSubmit:", error);
      setErrorMessage(error instanceof Error ? error.message : "Terjadi kesalahan yang tidak diketahui, silakan coba lagi nanti.");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center p-4 bg-white sm:p-8 lg:p-12">
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">{!isLogin ? "Mulai Sekarang" : "Selamat Datang Kembali"}</h2>
          <p className="text-gray-600">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              onClick={handleModeToggle}
              className="font-medium transition-colors text-[#0F5028] hover:text-[#0F5028]/80"
              disabled={isLoading}
            >
              {isLogin ? "Daftar" : "Masuk"}</button>
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
            {isLoading ? "Mohon tunggu..." : isLogin ? "Masuk" : "Buat Akun"}</Button>
        </form>        {/* Error and Success Messages */}
        {errorMessage && (
          <div className={`mt-4 p-3 text-sm rounded-sm ${
            errorMessage === "Login berhasil!" || errorMessage === "Registrasi berhasil!"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  )
}
