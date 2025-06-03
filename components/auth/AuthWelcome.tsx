"use client"

import { useState, useEffect } from "react"

const slides = [
	{
		title: "Empowering Farmers, Growing Together!",
		subtitle:
			"This platform helps educate farmers on the best agricultural practices, provides direct consultation with professionals, and offers live classes and educational articles.",
	},
	{
		title: "Consult with Experts",
		subtitle:
			"Get personalized advice and solutions for your farming challenges by consulting directly with agricultural professionals.",
	},
	{
		title: "Learn & Grow",
		subtitle:
			"Access live classes and a library of educational articles to improve your skills and knowledge in modern farming.",
	},
]

export default function WelcomeSlider() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="relative flex flex-col justify-center w-full h-full min-h-[400px] overflow-hidden color-slider">
			<img
				src="/farmer-1.jpg"
				alt="Farming background"
				className="absolute inset-0 z-10 object-cover w-full h-full pointer-events-none select-none opacity-15"
			/>
			{/* Content */}
			<div className="relative z-20 flex flex-col justify-center h-full p-8 lg:p-12 ">
				{/* Logo */}
			<div className="mt-2 mb-8 ml-3">
     <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[rgba(255,255,255,0.08)] backdrop-blur-sm">
            <img
                src="/logo-horizon-1.png"
      alt="Horizon Logo"
      className="object-contain max-w-full max-h-full rounded-lg drop-shadow-md"
      draggable="false"
             />
    </div>
</div>

				{/* Slide Content */}
				<div className="text-white mb-8 min-h-[200px] text-center">
					<h1 className="mb-4 text-4xl font-bold transition-all duration-500 font-heading lg:text-5xl drop-shadow-lg">
						{slides[currentSlide].title}
					</h1>
					<p className="text-lg leading-relaxed transition-all duration-500 opacity-95 drop-shadow-md">
						{slides[currentSlide].subtitle}
					</p>
				</div>

				

				{/* Navigation dots */}
				<div className="flex justify-center space-x-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full border-none transition-all duration-300 ${
								index === currentSlide
									? "bg-white"
									: "bg-white bg-opacity-50"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
