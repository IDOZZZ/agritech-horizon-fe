'use client';

import React from 'react';
import { WarningCircle } from '@phosphor-icons/react';
import Link from 'next/link';

export default function InternalServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <WarningCircle size={64} className="text-red-500" />
      <h1 className="text-4xl font-bold mt-4">500</h1>
      <p className="mt-2">Internal server error. Please try again later.</p>
      <Link href="/" className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">Go Back</Link>
    </div>
  );
}