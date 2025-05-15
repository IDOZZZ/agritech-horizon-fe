'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <div className="text-5xl">💥</div>
      <h1 className="text-4xl font-bold mt-4">500</h1>
      <p className="mt-2">Internal Server Error. Something went wrong.</p>
      <button onClick={() => reset()} className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
        Try Again
      </button>
    </div>
  );
}
// // This is a simple 500 Internal Server Error page for a Next.js application.
// // It displays an error message and a button to try again.