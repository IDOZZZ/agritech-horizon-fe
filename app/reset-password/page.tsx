"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Password dan konfirmasi password tidak cocok.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:1337/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          passwordConfirmation: confirmPassword,
          code: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password berhasil direset. Silakan login dengan password baru Anda.");
      } else {
        setMessage(data.error?.message || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="mb-4 text-2xl font-bold text-center">Reset Password</h1>
        <p className="mb-4 text-sm text-gray-600">
          Masukkan password baru Anda di bawah ini.
        </p>
        <Input
          type="password"
          placeholder="Password Baru"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4"
          required
        />
        <Input
          type="password"
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4"
          required
        />
        <Button
          type="submit"
          className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white font-medium rounded-xl transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Mengirim..." : "Reset Password"}
        </Button>
        {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
