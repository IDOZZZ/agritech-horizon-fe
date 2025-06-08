import React from 'react';
import Image from 'next/image';

const Consultation = () => {
  return (
    <div className="p-20 relative bg-[#F5FCF7] justify-start items-center gap-5 flex">
        <div className="w-1/2 flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-[17px] flex">
                <div className="text-black text-6xl font-semibold font-['Metropolis']">Konsultasi Pertanianmu bersama para Ahli</div>
                <div className="w-[597px] text-black text-2xl font-normal font-['Manrope'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.</div>
            </div>
            <div className="justify-start items-center gap-5 flex">
                <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 bg-[#0F5028] rounded-sm">
                    <div className="text-white font-['Manrope']">Mulai Konsultasi</div>
                </div>
                <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028]">
                    <div className="text-[#0F5028] font-['Manrope']">Lihat Selengkapnya</div>
                </div>
            </div>
        </div>
        <div className="h-[604px] w-1/2 flex gap-5">
            {/* <Image src="/img/farmer.png" className='mb-auto' alt="Placeholder image" width={304} height={412} /> */}
            <Image src="/img/farmer.png" className='h-[412px] object-cover object-center mb-auto' alt="Placeholder image" width={304} height={412} />
            <Image src="/img/tanaman.png" className='h-[506px] object-cover object-center mt-auto' alt="Placeholder image" width={305} height={506} />
        </div>
        <div className="w-[296px] h-[176px] px-8 py-4 left-[870px] top-[547px] absolute rounded-md border border-[#B1B1B1] bg-[rgba(0,0,0,0.12)] shadow-md backdrop-blur-md gap-4">
            <div className="mb-4 text-black text-xl font-medium font-['Poppins'] leading-7">Instruktur Tersertifikasi</div>
            <div className="justify-start items-start gap-2 flex">
                <Image src="https://placehold.co/42x42" alt="Instructor image" width={42} height={42} className="rounded-full" />
                <div className="pb-4 flex-col justify-start items-start flex">
                    <div className="text-black text-base font-medium font-['Poppins']">Donald Robert</div>
                    <div className="text-[#545756] text-sm font-light font-['Poppins']">Ahli Botani</div>
                </div>
            </div>
            <div className="mb-4 justify-start items-start gap-2 flex">
                <Image src="https://placehold.co/42x42" alt="Instructor image" width={42} height={42} className="rounded-full" />
                <div className="flex-col justify-start items-start flex">
                    <div className="text-black text-base font-medium font-['Poppins']">John White</div>
                    <div className="text-[#545756] text-sm font-light font-['Poppins']">Ahli Perkebunan</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Consultation;
