import React from 'react';
import Image from 'next/image';

const Consultation = () => {
  return (
    <div className="w-full p-8 md:p-20 relative bg-[#F5FCF7] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5">
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8 text-center md:text-left">
            <div className="flex flex-col justify-start items-center md:items-start gap-4">
                <div className="text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-['Metropolis'] leading-tight md:leading-[48px]">Konsultasi Pertanianmu bersama para Ahli</div>
                <div className="w-full max-w-xl text-black text-base md:text-lg lg:text-2xl font-normal font-['Manrope'] leading-normal md:leading-7">Dapatkan bimbingan langsung dari para ahli pertanian kami. Tingkatkan pengetahuan dan keterampilan Anda untuk hasil panen yang lebih baik.</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-5 w-full">
                <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 bg-[#0F5028] rounded-sm flex justify-center items-center w-full sm:w-auto">
                    <div className="text-white font-['Manrope']">Mulai Konsultasi</div>
                </div>
                <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028] flex justify-center items-center w-full sm:w-auto">
                    <div className="text-[#0F5028] font-['Manrope']">Lihat Selengkapnya</div>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center gap-5 relative h-[400px] md:h-[604px]">
            <div className="relative w-1/2 h-full flex flex-col justify-end">
                <Image src="/img/farmer.png" alt="Farmer" layout="fill" objectFit="cover" className='rounded-sm' />
            </div>
            <div className="relative w-1/2 h-full flex flex-col justify-start">
                <Image src="/img/tanaman.png" alt="Plants" layout="fill" objectFit="cover" className='rounded-sm' />
            </div>
            {/* <div className="w-[296px] h-[176px] px-8 py-4 absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 rounded-md border border-[#B1B1B1] bg-[rgba(0,0,0,0.12)] shadow-md backdrop-blur-md flex flex-col justify-center items-start gap-4">
                <div className="mb-2 text-black text-lg md:text-xl font-medium font-['Poppins'] leading-7">Instruktur Tersertifikasi</div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="justify-start items-center gap-2 flex">
                        <Image src="/img/farmer-user.png" alt="Instructor image" width={42} height={42} className="rounded-full" />
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-black text-base font-medium font-['Poppins']">Donald Robert</div>
                            <div className="text-[#545756] text-sm font-light font-['Poppins']">Ahli Botani</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                        <Image src="/img/peneliti.png" alt="Instructor image" width={42} height={42} className="rounded-full" />
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-black text-base font-medium font-['Poppins']">John White</div>
                            <div className="text-[#545756] text-sm font-light font-['Poppins']">Ahli Perkebunan</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  );
};

export default Consultation;
