import React from 'react';
import Image from 'next/image';

const Consultation = () => {
  return (
    <div className="self-stretch p-20 relative bg-[#F5FCF7] justify-start items-center gap-5 inline-flex">
        <div className="w-[628px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-[17px] flex">
                <div className="self-stretch text-black text-6xl font-semibold font-['Metropolis'] word-wrap">Diskusikan Pertanianmu bersama para Ahli</div>
                <div className="w-[597px] text-black text-2xl font-normal font-['Manrope'] leading-[28.80px] word-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.</div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
                <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-[197px] h-11 px-7 py-3 bg-[#0F5028] rounded-sm justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Mulai Konsultasi</div>
                </div>
                <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-[196px] h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-[#0F5028] justify-center items-center gap-2.5 flex">
                    <div className="text-center text-[#0F5028] text-base font-medium font-['Manrope'] leading-6 word-wrap">Lihat Selengkapnya</div>
                </div>
            </div>
        </div>
        <div className="justify-start items-center gap-5 flex">
            <div className="h-[604px] justify-start items-start gap-2.5 flex">
                <Image src="https://placehold.co/289x392" alt="Placeholder image" width={289} height={392} className="shadow-[40px_40px_40px] blur-md" />
                <Image src="https://placehold.co/304x412" alt="Placeholder image" width={304} height={412} />
            </div>
            <div className="h-[604px] justify-start items-end gap-2.5 flex">
                <Image src="https://placehold.co/305x506" alt="Placeholder image" width={305} height={506} />
            </div>
        </div>
        <div className="w-[296px] h-[176px] px-8 py-4 left-[787px] top-[547px] absolute bg-black bg-opacity-10 shadow-[8px_8px_16px_rgba(0,0,0,0.04)] rounded-sm outline-1 outline-offset-[-1px] outline-[#B1B1B1] backdrop-blur-md flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-black text-xl font-medium font-['Poppins'] leading-7 word-wrap">Instruktur Tersertifikasi</div>
            <div className="justify-start items-start gap-2 inline-flex">
                <Image src="https://placehold.co/42x42" alt="Instructor image" width={42} height={42} className="rounded-full" />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-black text-base font-medium font-['Poppins'] leading-[22.40px] word-wrap">Donald Robert</div>
                    <div className="text-[#545756] text-sm font-light font-['Poppins'] leading-[19.60px] word-wrap">Ahli Botani</div>
                </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
                <Image src="https://placehold.co/42x42" alt="Instructor image" width={42} height={42} className="rounded-full" />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-black text-base font-medium font-['Poppins'] leading-[22.40px] word-wrap">John White</div>
                    <div className="text-[#545756] text-sm font-light font-['Poppins'] leading-[19.60px] word-wrap">Ahli Perkebunan</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Consultation;
