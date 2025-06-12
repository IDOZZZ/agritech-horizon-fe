"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/courses-component.tsx/hero";
import CourseSelection from "@/components/courses-component.tsx/courses-selection";
import Navbar from "@/components/ui/navbar";

const CoursesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirect to login if no token
    } else {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/";
  };

  console.log("isAuthenticated state:", isAuthenticated); // Debugging log for authentication state

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Memuat...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mt-16"> {/* Add margin-top to create space below navbar */}
        <HeroSection />
        <CourseSelection />
        <div className="container px-4 mx-auto">
          <button
            onClick={handleLogout}
            className="px-4 py-2 mb-8 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
