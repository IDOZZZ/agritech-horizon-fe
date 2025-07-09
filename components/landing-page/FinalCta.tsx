import React from 'react';
import Link from 'next/link';

const FinalCta = () => {
  return (
    <div className="self-stretch px-8 md:px-20 py-16 md:py-[120px] bg-[#0F5028] flex-col justify-start items-center gap-10 flex text-center">
        <div className="self-stretch"><span className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold font-['Metropolis'] leading-tight md:leading-[72px]">Belajar Pertanian Lebih Mudah. Lebih Nyata. Lebih Berdampak.<br/></span><span className="text-white text-xl md:text-2xl lg:text-4xl font-normal font-['Metropolis'] leading-normal md:leading-[48px]">Akses materi aplikatif, mentor berpengalaman, dan komunitas petani seluruh Indonesia.</span></div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full max-w-md">
            <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full sm:w-[197px] h-11 px-7 py-3 bg-white rounded-sm justify-center items-center gap-2.5 flex hover:bg-gray-100 transition-colors">
                <div className="text-center text-[#0F5028] text-base font-medium font-['Manrope'] leading-6">Belajar Sekarang</div>
            </Link>
            <Link href="#consultation" data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-full sm:w-[196px] h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-white justify-center items-center gap-2.5 flex hover:bg-white/10 transition-colors">
                <div className="text-center text-white text-base font-medium font-['Manrope'] leading-6">Lihat Selengkapnya</div>
            </Link>
        </div>
    </div>
  );
};

export default FinalCta;
