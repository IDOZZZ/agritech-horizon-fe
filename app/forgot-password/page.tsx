"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:1337/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Email reset password telah dikirim. Silakan periksa email Anda.");
      } else {
        setMessage(data.error || "Terjadi kesalahan. Silakan coba lagi.");
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
        <h1 className="mb-4 text-2xl font-bold text-center">Lupa Kata Sandi</h1>
        <p className="mb-4 text-sm text-gray-600">
          Masukkan email Anda untuk menerima tautan reset password.
        </p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4"
          required
        />
        <Button
          type="submit"
          className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white font-medium rounded-xl transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Mengirim..." : "Kirim"}
        </Button>
        {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
