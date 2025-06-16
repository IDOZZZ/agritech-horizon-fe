import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {  return (
    <div className="self-stretch h-screen bg-gradient-to-b bg-cover bg-[#00000042] flex-col justify-center items-start gap-10 flex relative overflow-hidden px-32">
        <Image 
            src="/img/hero.png" 
            alt="Hero Background" 
            layout="fill" 
            objectFit="cover" 
            quality={100}
            priority
            className="absolute inset-0 z-[-1]"
        />
        <div className="w-3xl p-6 bg-[#00000022] rounded-sm backdrop-blur-md flex-col justify-start items-start gap-3 flex">
            <div className="w-2xl text-white text-6xl font-semibold font-['Metropolis']">Jadi Petani Cerdas, Mulai dari Satu Kelas.</div>
            <div className="self-stretch text-[#E4FFEF] text-2xl font-normal font-['Manrope']">Belajar pertanian digital, organik, hingga pemasaran hasil panen dalam satu platform.</div>            <div className="flex items-center justify-start gap-4">
                <Link href="/login" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-44 h-11 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6">Login</div>
                </Link>
                <Link href="/register" data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-44 h-11 rounded-sm outline-1 outline-offset-[-1px] outline-[#FFF] justify-center items-center flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6">Register</div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;
