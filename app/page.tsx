import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Welcome to Horizon 🌅</h1>
      <p className="max-w-md mb-8 text-center text-gray-600">
        Your gateway to knowledge and growth. Join us today and start your journey!
      </p>

      <div className="flex space-x-4">
 <Link href="/login" className= "px-6 py-2 text-white transition bg-blue-600 rounded-2xl hover:bg-blue-700">
         Login
        </Link>

        <Link href="/register" className="px-6 py-2 text-white transition bg-blue-600 rounded-2xl hover:bg-blue-700">
          Register
        </Link>
      </div>
    </div>
  );
}
