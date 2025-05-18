'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full p-8 shadow-xl rounded-2xl border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Horizon Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-2xl font-bold text-green-700">Masuk ke Horizon</h2>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Masuk
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-green-600 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
