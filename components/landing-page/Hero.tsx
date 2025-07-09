import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {  return (
    <div className="self-stretch h-screen bg-gradient-to-b bg-cover bg-[#00000042] flex-col justify-center items-center gap-10 flex relative overflow-hidden px-4 md:px-8 lg:px-16">
        <Image 
            src="/img/hero.png" 
            alt="Hero Background" 
            layout="fill" 
            objectFit="cover" 
            quality={100}
            priority
            className="absolute inset-0 z-[-1]"
        />
        <div className="w-full max-w-md p-6 bg-[#00000022] rounded-sm backdrop-blur-md flex-col justify-start items-start text-left gap-3 flex md:max-w-lg lg:max-w-3xl md:mt-20">
            <div className="w-full text-white text-4xl md:text-5xl lg:text-6xl font-semibold font-['Metropolis']">Tingkatkan Hasil Panenmu dengan Bimbingan Langsung dari Ahlinya!</div>
            <div className="self-stretch text-[#E4FFEF] text-lg md:text-xl lg:text-2xl font-normal font-['Manrope']">Belajar pertanian digital, organik, hingga pemasaran hasil panen dalam satu platform.</div>            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
                <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full sm:w-44 h-11 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6">Belajar Sekarang</div>
                </Link>
                <Link href="#consultation" data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-full sm:w-44 h-11 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028] justify-center items-center flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6">Lihat Selengkapnya</div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;
