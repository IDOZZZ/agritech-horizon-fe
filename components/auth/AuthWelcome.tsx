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
		<div className="relative flex flex-col justify-center w-full h-full min-h-[400px] overflow-hidden bg-emerald-500">
			<img
				src="/farmer-1.jpg"
				alt="Farming background"
				className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none z-10"
			/>
			{/* Content */}
			<div className="relative z-20 p-8 lg:p-12 flex flex-col justify-center h-full ">
				{/* Logo */}
				<div className="mb-8 ml-3 mt-2">
					<div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center overflow-hidden">
						<img
							src="/logo-horizon-1.png"
							alt="Horizon Logo"
							className="max-w-full max-h-full object-contain rounded-lg shadow-md"
							draggable="false"
							style={{ background: 'none' }}
						/>
					</div>
				</div>

				{/* Slide Content */}
				<div className="text-white mb-8 min-h-[200px] text-center">
					<h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4 transition-all duration-500 drop-shadow-lg">
						{slides[currentSlide].title}
					</h1>
					<p className="text-lg opacity-95 leading-relaxed transition-all duration-500 drop-shadow-md">
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
