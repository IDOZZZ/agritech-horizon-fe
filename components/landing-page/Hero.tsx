import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="self-stretch pt-10 pb-32 px-32 bg-gradient-to-b bg-cover bg-[#00000042] flex-col justify-start items-start gap-80 flex relative overflow-hidden">
        <Image src="/img/hero.png" alt="Hero Background" layout="fill" objectFit="cover" className="absolute inset-0 z-[-1]"
        />
        <div className="self-stretch justify-between items-center inline-flex relative z-10">
            <Image src="/img/horizon-logo-white.png" alt="logo" className="left-0 top-0 relative" width={138} height={45} />
            <div className="justify-start items-center gap-10 flex">
                <div className="justify-start items-center gap-10 flex">
                    <Link href="#home" className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Home</Link>
                    <Link href="#about-us" className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">About Us</Link>
                    <Link href="#consultation" className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Consultation</Link>
                    <Link href="#our-class" className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Our Class</Link>
                </div>
                <div className="w-[197px] justify-between items-center flex">
                    <Link href="/login" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-20 h-11 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                            <div className="text-center justify-center flex-col flex text-white font-medium font-['Manrope'] leading-6 word-wrap">Login</div>
                    </Link>
                    <Link href="/register" data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-20 h-11 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028] justify-center items-center gap-2.5 flex">
                            <div className="text-center justify-center flex-col flex text-white font-medium font-['Manrope'] leading-6 word-wrap">Registrasi</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-3xl p-6 bg-[#00000022] rounded-sm backdrop-blur-md flex-col justify-start items-start gap-3 flex">
            <div className="w-2xl text-white text-6xl font-semibold font-['Metropolis'] word-wrap">Jadi Petani Cerdas, Mulai dari Satu Kelas.</div>
            <div className="self-stretch text-[#E4FFEF] text-2xl font-normal font-['Manrope'] word-wrap">Belajar pertanian digital, organik, hingga pemasaran hasil panen dalam satu platform.</div>
            <div className="justify-start items-center gap-4 inline-flex">
                <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-44 h-11 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6 word-wrap">Belajar Sekarang</div>
                </Link>
                <Link href="#our-class" data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-44 h-11 rounded-sm outline-1 outline-offset-[-1px] outline-[#FFF] justify-center items-center flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6 word-wrap">Lihat Selengkapnya</div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;
