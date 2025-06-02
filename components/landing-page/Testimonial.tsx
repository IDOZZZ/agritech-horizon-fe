import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="self-stretch p-20 bg-[#F5FCF7] flex-col justify-start items-start gap-10 flex">
        <div className="self-stretch px-20 justify-start items-center gap-2.5 inline-flex">
            <div className="w-[765px] text-black text-6xl font-semibold font-['Metropolis'] word-wrap">Lihat apa yang pelanggan kami katakan</div>
        </div>
        <div className="self-stretch px-20 flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch justify-start items-center gap-5 inline-flex">
                <div className="w-[413px] h-[418px] flex-col justify-end items-start inline-flex">
                    <div className="self-stretch h-[309px] p-6 bg-white flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch justify-start items-center gap-3 inline-flex">
                            <Image src="https://placehold.co/100x100" alt="Customer testimonial image" width={100} height={100} className="rounded-full" />
                            <div className="w-[216px] flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Metropolis'] word-wrap">Ahmad Ramadhan</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Manrope'] word-wrap">Magelang, Jawa Tengah</div>
                                <div className="justify-start items-end gap-0.5 inline-flex">
                                    <div className="text-center text-black text-base font-normal font-['Manrope'] word-wrap">4,5</div>
                                    <div className="justify-start items-center gap-0.5 flex"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[339px] text-black text-2xl font-normal font-['Manrope'] leading-[28.80px] word-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus </div>
                    </div>
                </div>
                <div className="w-[414px] h-[418px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch p-6 bg-white shadow-[2px_2px_40px_rgba(0,0,0,0.08)] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch justify-start items-center gap-3 inline-flex">
                            <Image src="https://placehold.co/100x100" alt="Customer testimonial image" width={100} height={100} className="rounded-full" />
                            <div className="w-[216px] flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Metropolis'] word-wrap">Faizal Arafi</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Manrope'] word-wrap">Surakarta, Jawa Tengah</div>
                                <div className="justify-start items-end gap-0.5 inline-flex">
                                    <div className="text-center text-black text-base font-normal font-['Manrope'] word-wrap">4,5</div>
                                    <div className="justify-start items-center gap-0.5 flex"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[339px] text-black text-2xl font-normal font-['Manrope'] leading-[28.80px] word-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus </div>
                    </div>
                </div>
                <div className="w-[413px] h-[418px] flex-col justify-end items-start inline-flex">
                    <div className="self-stretch h-[309px] p-6 bg-white flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch justify-start items-center gap-3 inline-flex">
                            <Image src="https://placehold.co/100x100" alt="Customer testimonial image" width={100} height={100} className="rounded-full" />
                            <div className="w-[216px] flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Metropolis'] word-wrap">Naufal Aldi</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Manrope'] word-wrap">Magetan, Jawa Timur</div>
                                <div className="justify-start items-end gap-0.5 inline-flex">
                                    <div className="text-center text-black text-base font-normal font-['Manrope'] word-wrap">4,5</div>
                                    <div className="justify-start items-center gap-0.5 flex"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[339px] text-black text-2xl font-normal font-['Manrope'] leading-[28.80px] word-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus </div>
                    </div>
                </div>
            </div>
            <div data-swipe-button="Dark" className="justify-start items-center gap-1.5 inline-flex">
                <div className="w-[18px] h-[18px] bg-[#D4D4D4] rounded-full border-[2.25px] border-[#D4D4D4]"></div>
                <div className="w-[18px] h-[18px] rounded-full border-[2.25px] border-[#D4D4D4]"></div>
                <div className="w-[18px] h-[18px] rounded-full border-[2.25px] border-[#D4D4D4]"></div>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
