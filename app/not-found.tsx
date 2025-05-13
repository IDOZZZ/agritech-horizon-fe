'use client'; // This directive now applies ONLY to NotFoundClientContent

import React, { useState, useEffect } from 'react';
import { SmileyXEyes } from '@phosphor-icons/react';
import { Button } from '../components/button';

// Define the Client Component part within the file
function NotFoundClientContent() {
  const [isClient, setIsClient] = useState(false); // State to track client-side mount

  useEffect(() => {
    setIsClient(true); // Set to true once mounted on the client
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <SmileyXEyes size={64} className="text-gray-500 dark:text-gray-400" />
      <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for could not be found.
      </p>
      {/* Always render the button as enabled. onClick logic handles client-side check. Test with explicit visible styles. */}
      <Button
        className="mt-6 bg-blue-500 text-white p-4 font-bold hover:bg-blue-100 hover:text-black cursor-pointer" // Added explicit visible styles for testing
        onClick={() => {
          if (isClient) {
            window.history.back();
          }
        }}
      >
        Go Back
      </Button>
    </div>
  );
}

// The default export remains a Server Component
export default function NotFound() {
  return <NotFoundClientContent />;
}
