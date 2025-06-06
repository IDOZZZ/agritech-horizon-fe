import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const Vp = () => {
  return (
    <div className="self-stretch pt-20 pb-20 bg-white flex-col justify-start items-end gap-15 flex">
        <div className="px-20 justify-center items-center gap-2.5 flex">
            <div className="w-[955px] text-black text-4xl font-semibold font-['Metropolis'] leading-[48px]">Horizon adalah platform edukasi digital yang dirancang khusus untuk petani Indonesia. Kami bantu kamu belajar dari nol hingga panen, dengan materi lokal yang praktis dan langsung bisa diterapkan di lahanmu.</div>
        </div>
        <div className="self-stretch px-20 gap-5 flex justify-center">
            <div className="w-xs h-[472px] flex-col justify-start items-end gap-3 flex">
                <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" width={305} height={356} className="self-stretch bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
                <Link href="#" className="w-fit px-6 py-0.5 bg-white rounded-sm outline-2 outline-offset-[-2px] outline-black gap-3.5">
                        <ArrowLeft size={32} weight='bold' />
                </Link>
            </div>
            <div className="w-xs flex-col justify-start items-start gap-8 flex">
                <Link href="#" className="justify-start items-center gap-3 flex">
                    <div className="w-3xs text-black text-3xl font-['Manrope'] leading-11">Belajar Bersama Kami</div>
                    <ArrowUpRight size={40} weight='bold' />
                </Link>
                <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" width={305} height={356} className="bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
            </div>
            <div className="w-xs flex-col justify-center gap-3 flex">
                <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" width={305} height={356} className="self-stretch bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
                <Link href="#" className="w-fit px-6 py-0.5 bg-black rounded-sm outline-2 outline-offset-[-2px] outline-black gap-3.5">
                    <ArrowRight size={32} weight='bold' className="text-white" />
                </Link>
            </div>
            <div className="flex justify-start items-start gap-2.5">
                <Image src="/img/strawberry-farmer.jpeg" alt="Placeholder image" width={305} height={356} className="bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
            </div>
        </div>
    </div>
  );
};

export default Vp;
