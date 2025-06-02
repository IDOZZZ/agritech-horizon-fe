import React from 'react';

const Hero = () => {
  return (
    <div className="self-stretch pt-10 pb-[120px] px-[120px] bg-gradient-to-b from-black/10 to-black/10 bg-cover flex-col justify-start items-start gap-[335px] flex" style={{ backgroundImage: 'url(https://placehold.co/1440x841)' }}>
        <div className="self-stretch justify-between items-center inline-flex">
            <div className="w-[220px] h-10 relative">
                <div className="w-[220px] h-10 left-0 top-0 absolute overflow-hidden">
                    <div className="w-[39.98px] h-10 left-[0.02px] top-0 absolute bg-[#265B3B]"></div>
                    <div className="w-[220px] h-[37px] left-0 top-0 absolute bg-[#265B3B]"></div>
                </div>
            </div>
            <div className="justify-start items-center gap-10 flex">
                <div className="justify-start items-center gap-10 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Home</div>
                    <div className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">About Us</div>
                    <div className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Consultation</div>
                    <div className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Our Class</div>
                </div>
                <div className="w-[197px] justify-between items-center flex">
                    <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-[89px] h-11 px-7 py-3 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                        <div className="text-center justify-center flex-col flex text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Sign in</div>
                    </div>
                    <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-[88px] h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028] justify-center items-center gap-2.5 flex">
                        <div className="text-center justify-center flex-col flex text-[#0F5028] text-base font-medium font-['Manrope'] leading-6 word-wrap">Sign up</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[738px] p-6 opacity-99 bg-black bg-opacity-10 rounded-sm outline-1 outline-offset-[-1px] outline-[#232323] backdrop-blur-md flex-col justify-start items-start gap-3 flex">
            <div className="w-[679px] text-white text-6xl font-semibold font-['Metropolis'] word-wrap">Jadi Petani Cerdas, Mulai dari Satu Kelas.</div>
            <div className="self-stretch text-[#E4FFEF] text-2xl font-normal font-['Manrope'] word-wrap">Belajar pertanian digital, organik, hingga pemasaran hasil panen dalam satu platform.</div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-[187px] h-11 px-7 py-3 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6 word-wrap">Belajar Sekarang</div>
                </div>
                <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-[187px] h-11 px-7 py-3 rounded-sm outline-px outline-offset-[-0.20px] outline-white justify-center items-center gap-2.5 flex">
                    <div className="text-center justify-center flex-col flex text-white text-base font-semibold font-['Manrope'] leading-6 word-wrap">Lihat Selengkapnya</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
