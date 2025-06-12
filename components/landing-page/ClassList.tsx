import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const ClassList = () => {
  return (
    <div className="self-stretch py-20 bg-white overflow-hidden flex-col justify-start items-center gap-6 flex">
        <div className="w-full flex-col justify-start items-start gap-10 flex">
            <div className="w-2/3 px-20 flex-col justify-start items-start gap-4 flex">
                <div className="w-[735px] text-black text-6xl font-semibold font-['Metropolis']">Kelas tersedia, belajar bersama kami</div>
                <div className="self-stretch text-black text-2xl font-normal font-['Manrope'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.</div>
            </div>
            <div className="self-stretch px-20 justify-end items-center gap-3 inline-flex">
                <Link href="#" className="w-fit px-10 py-2 bg-white rounded-sm outline-2 outline-offset-2 outline-black gap-3.5">
                    <ArrowLeft size={32} weight='bold' />
                </Link>
                <Link href="#" className="w-fit px-10 py-2 bg-black rounded-sm outline-2 outline-offset-2 outline-black gap-3.5">
                    <ArrowRight size={32} weight='bold' className="text-white" />
                </Link>
            </div>
        </div>
        <div className="w-[1788px] justify-start items-center gap-10 inline-flex">
            <div className="w-[331px] h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 bg-cover flex-col justify-end items-center gap-2.5 inline-flex" style={{ backgroundImage: 'url(https://placehold.co/331x440)' }}>
                <div className="w-[309px] p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex">
                    <div className="w-[289px] h-[97px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-2xl font-bold font-['Metropolis'] leading-[30px]">Belajar Pembibitan</div>
                        <div className="self-stretch h-[42px] text-white text-base font-normal font-['Manrope'] leading-[19.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus <br/> </div>
                    </div>
                    <div className="w-full  gap-3 inline-flex">
                        <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full p-2.5 bg-[#0F5028] rounded-sm">
                            <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                        </Link>
                        <div className="bg-[#E3FAEC] rounded-sm">
                            <ArrowUpRight size={44} weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[331px] h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 bg-cover flex-col justify-end items-center gap-2.5 inline-flex" style={{ backgroundImage: 'url(https://placehold.co/331x440)' }}>
                <div className="w-[309px] p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex">
                    <div className="w-[289px] h-[97px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-2xl font-bold font-['Metropolis'] leading-[30px]">Media Tanam</div>
                        <div className="self-stretch h-[42px] text-white text-base font-normal font-['Manrope'] leading-[19.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus <br/> </div>
                    </div>
                    <div className="w-full  gap-3 inline-flex">
                        <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full p-2.5 bg-[#0F5028] rounded-sm">
                            <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                        </Link>
                        <div className="bg-[#E3FAEC] rounded-sm">
                            <ArrowUpRight size={44} weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[331px] h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 bg-cover flex-col justify-end items-center gap-2.5 inline-flex" style={{ backgroundImage: 'url(https://placehold.co/331x440)' }}>
                <div className="w-[309px] p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex">
                    <div className="w-[289px] h-[97px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-2xl font-bold font-['Metropolis'] leading-[30px]">Media Hidroponik</div>
                        <div className="self-stretch h-[42px] text-white text-base font-normal font-['Manrope'] leading-[19.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus <br/> </div>
                    </div>
                    <div className="w-full  gap-3 inline-flex">
                        <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full p-2.5 bg-[#0F5028] rounded-sm">
                            <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                        </Link>
                        <div className="bg-[#E3FAEC] rounded-sm">
                            <ArrowUpRight size={44} weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[331px] h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 bg-cover flex-col justify-end items-center gap-2.5 inline-flex" style={{ backgroundImage: 'url(https://placehold.co/331x440)' }}>
                <div className="w-[309px] p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex">
                    <div className="w-[289px] h-[97px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-2xl font-bold font-['Metropolis'] leading-[30px]">Belajar Pembibitan</div>
                        <div className="self-stretch h-[42px] text-white text-base font-normal font-['Manrope'] leading-[19.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus <br/> </div>
                    </div>
                    <div className="w-full  gap-3 inline-flex">
                        <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full p-2.5 bg-[#0F5028] rounded-sm">
                            <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                        </Link>
                        <div className="bg-[#E3FAEC] rounded-sm">
                            <ArrowUpRight size={44} weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[331px] h-[440px] p-2 bg-gradient-to-b from-black/20 to-black/20 bg-cover flex-col justify-end items-center gap-2.5 inline-flex" style={{ backgroundImage: 'url(https://placehold.co/331x440)' }}>
                <div className="w-[309px] p-3 bg-black bg-opacity-30 rounded-sm flex-col justify-start items-start gap-2 flex">
                    <div className="w-[289px] h-[97px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-2xl font-bold font-['Metropolis'] leading-[30px]">Belajar Pembibitan</div>
                        <div className="self-stretch h-[42px] text-white text-base font-normal font-['Manrope'] leading-[19.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus <br/> </div>
                    </div>
                    <div className="w-full  gap-3 inline-flex">
                        <Link href="#our-class" data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-full p-2.5 bg-[#0F5028] rounded-sm">
                            <div className="text-center text-white font-['Manrope'] leading-6">Belajar Sekarang</div>
                        </Link>
                        <div className="bg-[#E3FAEC] rounded-sm">
                            <ArrowUpRight size={44} weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ClassList;
