import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Horizon 🌅</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Your gateway to knowledge and growth. Join us today and start your journey!
      </p>

      <div className="flex space-x-4">
        <Link href="/login" className="px-6 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition">
          Login
        </Link>

        <Link href="/register" className="px-6 py-2 rounded-2xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
          Register
        </Link>
      </div>
    </div>
  );
}
