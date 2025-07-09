import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const Vp = () => {
  return (
    <div className="self-stretch py-10 md:py-20 bg-white flex-col justify-start items-center gap-10 md:gap-15 flex">
        <div className="px-4 md:px-20 flex justify-center items-center">
            <div className="w-full max-w-4xl text-black text-2xl md:text-3xl lg:text-4xl font-semibold font-['Metropolis'] leading-normal md:leading-[48px] text-center">Horizon adalah platform edukasi digital yang dirancang khusus untuk petani Indonesia. Kami bantu kamu belajar dari nol hingga panen, dengan materi lokal yang praktis dan langsung bisa diterapkan di lahanmu.</div>
        </div>
        <div className="self-stretch px-4 md:px-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5">
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-start items-center md:items-end gap-3">
                <div className="relative w-full h-64 md:h-80">
                    <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" layout="fill" objectFit="cover" className="rounded-sm" />
                </div>
                <Link href="#" className="w-fit px-6 py-0.5 bg-white rounded-sm outline-2 outline-offset-[-2px] outline-black gap-3.5 flex items-center">
                        <ArrowLeft size={32} weight='bold' />
                </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-start items-center md:items-start gap-8">
                <Link href="#" className="justify-center md:justify-start items-center gap-3 flex">
                    <div className="w-full text-black text-xl md:text-2xl lg:text-3xl font-['Manrope'] leading-normal md:leading-11 text-center md:text-left">Belajar Bersama Kami</div>
                    <ArrowUpRight size={40} weight='bold' />
                </Link>
                <div className="relative w-full h-64 md:h-80">
                    <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" layout="fill" objectFit="cover" className="rounded-sm" />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center gap-3">
                <div className="relative w-full h-64 md:h-80">
                    <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" layout="fill" objectFit="cover" className="rounded-sm" />
                </div>
                <Link href="#" className="w-fit px-6 py-0.5 bg-black rounded-sm outline-2 outline-offset-[-2px] outline-black gap-3.5 flex items-center">
                    <ArrowRight size={32} weight='bold' className="text-white" />
                </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80">
                    <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" layout="fill" objectFit="cover" className="rounded-sm" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Vp;
