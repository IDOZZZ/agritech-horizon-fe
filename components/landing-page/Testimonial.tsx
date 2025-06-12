"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
    {
        name: "Ahmad Ramadhan",
        location: "Magelang, Jawa Tengah",
        rating: "4,5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus",
        image: "https://placehold.co/100x100"
    },
    {
        name: "Faizal Arafi",
        location: "Surakarta, Jawa Tengah",
        rating: "4,5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus",
        image: "https://placehold.co/100x100"
    },
    {
        name: "Naufal Aldi",
        location: "Magetan, Jawa Timur",
        rating: "4,5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus",
        image: "https://placehold.co/100x100"
    },
    {
        name: "Customer Four",
        location: "City, Province",
        rating: "4,5",
        text: "Another testimonial text goes here.",
        image: "https://placehold.co/100x100"
    },
    {
        name: "Customer Five",
        location: "City, Province",
        rating: "4,5",
        text: "Yet another testimonial text.",
        image: "https://placehold.co/100x100"
    }
];

const Testimonial = () => {
    const autoplayOptions = {
        delay: 3000, // Delay in milliseconds
        stopOnInteraction: false, // Continue autoplay on user interaction
        stopOnMouseEnter: true, // Stop autoplay on mouse enter
    };

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
    }, [emblaApi]);

    const onInit = useCallback((emblaApi) => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
        }
    }, []);

    const onSelect = useCallback((emblaApi) => {
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
        <div className="self-stretch p-20 bg-[#F5FCF7] flex-col justify-start items-start gap-10 flex">
            <div className="w-3/4 text-black text-6xl font-semibold font-['Metropolis']">Lihat apa yang pelanggan kami katakan</div>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((testimonial, index) => (
                        <div className={`embla__slide ${index === selectedIndex ? 'embla__slide--centered' : ''}`} key={index}>
                            <div className="testimonial-item">
                                <div className="w-[413px] h-[418px] flex-col justify-end items-start flex">
                                    <div className="self-stretch h-[309px] p-6 bg-white flex-col justify-start items-start gap-4 flex">
                                        <div className="self-stretch justify-start items-center gap-3 flex">
                                            <Image src={testimonial.image} alt="Customer testimonial image" width={100} height={100} className="rounded-full" />
                                            <div className="w-[216px] flex-col justify-start items-start gap-0.5 flex">
                                                <div className="text-center text-black text-2xl font-semibold font-['Metropolis']">{testimonial.name}</div>
                                                <div className="text-center text-black text-base font-normal font-['Manrope']">{testimonial.location}</div>
                                                <div className="justify-start items-end gap-0.5 flex">
                                                    <div className="text-center text-black text-base font-normal font-['Manrope']">{testimonial.rating}</div>
                                                    <div className="justify-start items-center gap-0.5 flex"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[339px] text-black text-2xl font-normal font-['Manrope'] leading-[28.80px]">{testimonial.text}</div>
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
                  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */
                  will-change: transform; /* Hint to the browser for smoother animation */
                }

                /* Responsive adjustments for Embla */
                @media (min-width: 600px) {
                    .embla__slide {
                        flex: 0 0 50%;
                    }
                }

                @media (min-width: 1024px) {
                    .embla__slide {
                        flex: 0 0 33.33%;
                    }
                }

                /* Dot Styling */
                .embla__dots {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 20px;
                }
                .embla__dot {
                    width: 10px;
                    height: 10px;
                    background-color: #ccc; /* Gray color for all dots */
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    outline: none;
                }
                .embla__dot--selected {
                    background-color: #888; /* Slightly darker gray for the active dot */
                }

                /* Centered Slide Animation */
                .embla__slide--centered {
                    transform: translateY(-30px); /* Increase the lift for the centered slide */
                }
            `}</style>
        </div>
    );
};

export default Testimonial;
