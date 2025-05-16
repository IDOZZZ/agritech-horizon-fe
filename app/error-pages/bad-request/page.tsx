'use client';

import React from 'react';
import { Warning } from '@phosphor-icons/react';
import Link from 'next/link';

export default function BadRequest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <Warning size={64} className="text-yellow-500" />
      <h1 className="text-4xl font-bold mt-4">400</h1>
      <p className="mt-2">Bad request. Something’s wrong with the input.</p>
      <Link href="/" className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">Go Back</Link>
    </div>
  );
}