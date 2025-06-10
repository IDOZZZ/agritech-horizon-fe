"use client";

import React, { useEffect } from "react";

const CoursesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const courses = [
    {
      title: "Belajar Pembibitan",
      description: "Kursus lengkap untuk pembibitan tanaman."
    },
    {
      title: "Media Tanam",
      description: "Pelajari berbagai media tanam untuk tanaman."
    },
    {
      title: "Media Hidroponik",
      description: "Teknik hidroponik untuk hasil maksimal."
    }
  ];

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
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Temukan Kelas sesuai dengan Kebutuhanmu</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
              Belajar Sekarang
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default CoursesPage;
