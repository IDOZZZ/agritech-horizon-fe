'use client';

import React from 'react';
import { Lock } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <Lock size={64} className="text-red-500" />
      <h1 className="text-4xl font-bold mt-4">403</h1>
      <p className="mt-2">Access to this page is forbidden.</p>
      <Link href="/" className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">Go Back</Link>
    </div>
  );
}
// This is a simple 403 Forbidden error page for a Next.js application.
// It displays an error message and a button to go back to the home page.
