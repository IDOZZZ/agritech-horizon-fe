import React from "react";

const CoursesPage = () => {
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

  return (
    <div className="p-8">
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
    </div>
  );
};

export default CoursesPage;
