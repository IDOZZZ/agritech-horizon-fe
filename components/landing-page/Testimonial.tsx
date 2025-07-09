"use client";

"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialData {
    name: string;
    location: string;
    rating: string;
    text: string;
    image: string;
}

const testimonials: TestimonialData[] = [
    {
        name: "Ahmad Ramadhan",
        location: "Magelang, Jawa Tengah",
        rating: "4,5",
        text: "Horizon sangat membantu saya dalam memahami teknik pertanian modern. Hasil panen saya meningkat drastis!",
        image: "/img/farmer-user.png"
    },
    {
        name: "Faizal Arafi",
        location: "Surakarta, Jawa Tengah",
        rating: "4,5",
        text: "Materi yang disajikan sangat praktis dan mudah diterapkan. Saya merekomendasikan Horizon untuk semua petani.",
        image: "/img/peneliti.png"
    },
    {
        name: "Naufal Aldi",
        location: "Magetan, Jawa Timur",
        rating: "4,5",
        text: "Fitur konsultasi dengan ahli sangat membantu saya mengatasi masalah di lahan. Terima kasih Horizon!",
        image: "/img/peneliti2.png"
    },
    {
        name: "Customer Four",
        location: "City, Province",
        rating: "4,5",
        text: "Komunitasnya sangat aktif dan suportif. Saya belajar banyak dari pengalaman petani lain.",
        image: "/img/farmer-user.png"
    },
    {
        name: "Customer Five",
        location: "City, Province",
        rating: "4,5",
        text: "Antarmuka platform yang user-friendly membuat belajar jadi menyenangkan dan tidak membosankan.",
        image: "/img/peneliti.png"
    }
];

const Testimonial = () => {
    const autoplayOptions = {
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    };
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
    }, [emblaApi]);
    const onInit = useCallback((emblaApi: any) => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
        }
    }, []);
    const onSelect = useCallback((emblaApi: any) => {
        if (emblaApi) {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="self-stretch p-8 md:p-20 bg-[#F5FCF7] flex-col justify-start items-center gap-10 flex">
            <div className="w-full max-w-4xl text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-['Metropolis'] text-center">Lihat apa yang pelanggan kami katakan</div>

            <div className="embla w-full" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((testimonial: TestimonialData, index) => (
                        <div className={`embla__slide ${index === selectedIndex ? 'embla__slide--centered' : ''}`} key={index}>
                            <div className="testimonial-item w-full flex justify-center">
                                <div className="w-full max-w-md h-auto flex-col justify-end items-start flex">
                                    <div className="self-stretch p-6 bg-white flex-col justify-start items-start gap-4 flex rounded-md shadow-md">
                                        <div className="flex items-center self-stretch justify-start gap-3">
                                            <Image src={testimonial.image} alt="Customer testimonial image" width={80} height={80} className="rounded-full object-cover" />
                                            <div className="flex-col justify-start items-start gap-0.5 flex">
                                                <div className="text-black text-xl md:text-2xl font-semibold font-['Metropolis']">{testimonial.name}</div>
                                                <div className="text-black text-sm md:text-base font-normal font-['Manrope']">{testimonial.location}</div>
                                                <div className="justify-start items-end gap-0.5 flex">
                                                    <div className="text-black text-sm md:text-base font-normal font-['Manrope']">{testimonial.rating}</div>
                                                    {/* Add star icons here if needed */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full text-black text-base md:text-xl font-normal font-['Manrope'] leading-normal">{testimonial.text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                        type="button"
                        onClick={() => scrollTo(index)}
                    ></button>
                ))}
            </div>

            {/* Embla CSS and Dot Styling */}
            <style>{`
                .embla {
                  overflow: hidden;
                  width: 100%;
                }
                .embla__container {
                  display: flex;
                  user-select: none;
                  -webkit-touch-callout: none;
                  -khtml-user-select: none;
                  -webkit-tap-highlight-color: transparent;
                  margin-left: -10px;
                }
                .embla__slide {
                  flex: 0 0 100%;
                  min-width: 0;
                  padding-left: 10px;
                  transition: transform 0.3s ease-in-out;
                  will-change: transform;
                }

                @media (min-width: 640px) { /* sm breakpoint */
                    .embla__slide {
                        flex: 0 0 50%;
                    }
                }

                @media (min-width: 1024px) { /* lg breakpoint */
                    .embla__slide {
                        flex: 0 0 33.33%;
                    }
                }

                .embla__dots {
                    display: flex;
                    justify-content: center; /* Center dots */
                    margin-top: 20px;
                }
                .embla__dot {
                    width: 10px;
                    height: 10px;
                    background-color: #ccc;
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    outline: none;
                }
                .embla__dot--selected {
                    background-color: #888;
                }

                .embla__slide--centered {
                    transform: translateY(-15px); /* Slightly less lift for better visual */
                }
            `}</style>
        </div>
    );
};

export default Testimonial;
