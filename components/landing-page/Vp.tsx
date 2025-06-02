import React from 'react';
import Image from 'next/image';

const Vp = () => {
  return (
    <div className="self-stretch pt-20 pb-20 bg-white flex-col justify-start items-end gap-15 flex">
        <div className="px-20 justify-center items-center gap-2.5 inline-flex">
            <div className="w-[955px] text-black text-4xl font-semibold font-['Metropolis'] leading-[48px] word-wrap">Platform belajar pertanian digital yang praktis, relevan, dan dirancang khusus untuk kebutuhan petani Indonesia masa kini.</div>
        </div>
        <div className="self-stretch px-20 justify-start items-center gap-5 inline-flex">
            <div className="w-[305px] h-[472px] flex-col justify-start items-end gap-3 inline-flex">
                <Image src="https://placehold.co/305x356" alt="Placeholder image" width={305} height={356} className="self-stretch bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
                <div className="px-10 py-2 bg-white rounded-sm outline-2 outline-offset-[-2px] outline-black justify-start items-center gap-3.5 inline-flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 overflow-hidden">
                        <div className="w-[18.75px] h-[15.75px] left-[2.62px] top-[4.12px] absolute bg-black"></div>
                    </div>
                </div>
            </div>
            <div className="w-[305px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <div className="w-[230px] text-black text-3xl font-semibold font-['Manrope'] leading-[38.40px] word-wrap">Belajar Bersama Kami</div>
                    <div className="w-11 h-11 relative bg-white overflow-hidden rounded-sm">
                        <div className="w-[19.25px] h-[19.25px] left-[11px] top-[13.75px] absolute outline-3 outline-offset-[-1.50px] outline-black"></div>
                        <div className="w-[18.33px] h-[18.33px] left-[14.67px] top-[11px] absolute outline-3 outline-offset-[-1.50px] outline-black"></div>
                    </div>
                </div>
                <Image src="https://placehold.co/280x356" alt="Placeholder image" width={280} height={356} className="shadow-[40px_40px_40px] rounded-sm blur-md bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10" />
                <Image src="https://placehold.co/305x356" alt="Placeholder image" width={305} height={356} className="bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
            </div>
            <div className="w-[305px] h-[472px] flex-col justify-center items-start gap-3 inline-flex">
                <Image src="https://placehold.co/305x356" alt="Placeholder image" width={305} height={356} className="self-stretch bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
                <div className="px-10 py-2 bg-black rounded-sm outline-2 outline-offset-[-2px] outline-black justify-start items-center gap-3.5 inline-flex">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-[18.75px] h-[15.75px] left-[2.62px] top-[4.12px] absolute bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="h-[472px] justify-start items-start gap-2.5 flex">
                <Image src="https://placehold.co/305x356" alt="Placeholder image" width={305} height={356} className="bg-gradient-to-b from-[#265B3B]/10 to-[#265B3B]/10 rounded-sm" />
            </div>
        </div>
    </div>
  );
};

export default Vp;
