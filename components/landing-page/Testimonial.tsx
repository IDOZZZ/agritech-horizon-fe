'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import '../../styles/embla.css';
import { StarHalfIcon, StarIcon } from '@phosphor-icons/react';

const Testimonial : React.FC = () => {
    const OPTIONS: EmblaOptionsType = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 5000 })])
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);


    const testimonials = [
      {
        image: "https://placehold.co/100x100",
        name: "Ahmad Ramadhan",
        location: "Magelang, Jawa Tengah",
        rating: "4.3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus "
      },
      {
        image: "https://placehold.co/100x100",
        name: "Faizal Arafi",
        location: "Surakarta, Jawa Tengah",
        rating: "2.5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus "
      },
      {
        image: "https://placehold.co/100x100",
        name: "Naufal Aldi",
        location: "Magetan, Jawa Timur",
        rating: "4.0",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus "
      },
      {
        image: "https://placehold.co/100x100",
        name: "Naufal Aldi",
        location: "Magetan, Jawa Timur",
        rating: "2.0",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus "
      },
      {
        image: "https://placehold.co/100x100",
        name: "Naufal Aldi",
        location: "Magetan, Jawa Timur",
        rating: "1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus "
      },
    ];

  return (
    <div className="self-stretch p-20 bg-[#F5FCF7] flex-col justify-start items-start gap-10 flex">
        <div className="w-2/3 text-black text-6xl font-semibold font-heading">Lihat apa yang pelanggan kami katakan</div>
        <div className="embla testimonial-section w-full max-w-full m-auto">
          <div className="embla__viewport flex flex-col justify-end h-full overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex h-auto">
                {/* start foreach */}
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`embla__slide pl-4 min-w-0 flex-grow-0 flex-shrink-0 basis-1/3 justify-center ${index === selectedIndex ? 'transition duration-300 ease-in-out -translate-y-1/2' : ''}`}>
                        <div className="flex-col justify-end items-start inline-flex">
                            <div className="self-stretch h-[309px] p-6 bg-white flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                    <Image src={testimonial.image} alt="Customer testimonial image" width={100} height={100} className="rounded-full" />
                                    <div className="w-[216px] flex-col justify-start items-start gap-0.5 inline-flex">
                                        <div className="text-center text-black text-2xl font-semibold font-heading">{testimonial.name}</div>
                                        <div className="text-center text-black text-base font-normal font-['Manrope']">{testimonial.location}</div>
                                        <div className="justify-start items-end gap-0.5 inline-flex">
                                            <div className="text-center text-black text-base font-normal font-['Manrope']">{testimonial.rating}</div>
                                            <div className="justify-start items-center gap-0.5 flex">
                                              {[...Array(5).keys()].map((i) => (
                                                <React.Fragment key={i}>
                                                  {i < Math.floor(Number(testimonial.rating)) && <StarIcon size={24} color="#fbbc05" weight='fill' />}
                                                  {i === Math.floor(Number(testimonial.rating)) && Number(testimonial.rating) % 1 !== 0 ? (
                                                    <StarHalfIcon size={24} color="#fbbc05" weight='fill' />
                                                  ) : (
                                                    i >= Math.ceil(Number(testimonial.rating)) && <StarIcon size={24} color="#fbbc05" weight='regular' />
                                                  )}
                                                </React.Fragment>
                                              ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-black text-2xl font-normal font-['Manrope'] leading-7">{testimonial.text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
        {/* The swipe buttons are now dynamic pagination dots */}
        <div className="m-auto justify-center items-center gap-1.5 inline-flex">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    className={`w-[18px] h-[18px] rounded-full border-[2.25px] border-[#D4D4D4] ${index === selectedIndex ? 'bg-[#D4D4D4]' : ''}`}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                ></button>
            ))}
        </div>
    </div>
  );
};

export default Testimonial;
