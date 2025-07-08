"use client";

import React from "react";
import HeroSection from "@/components/courses-component.tsx/hero";
import CourseSelection from "@/components/courses-component.tsx/courses-selection";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mt-16"> 
        <HeroSection />
        <CourseSelection />
      </div>
    </div>
  );
};

export default CoursesPage;
