import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-start self-stretch justify-start gap-2 p-20 bg-white">
        <div className="inline-flex items-center self-stretch justify-start gap-5">
            <div className="w-[413px] h-[357px] flex-col justify-start items-start gap-10 inline-flex">
                <div className="flex flex-col items-start self-stretch justify-start gap-2">
                    <div className="w-[220px] h-10 relative">
                        <div className="w-[220px] h-10 left-0 top-0 absolute overflow-hidden">
                            <div className="w-[39.98px] h-10 left-[0.02px] top-0 absolute bg-[#265B3B]"></div>
                            <div className="w-[220px] h-[37px] left-0 top-0 absolute bg-[#265B3B]"></div>
                        </div>
                    </div>
                    <div className="self-stretch text-black text-lg font-normal font-['Inter'] leading-[30px] word-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus</div>
                </div>
                <div className="flex flex-col items-start justify-start gap-6 w-30">
                    <div className="self-stretch text-black text-xl font-normal font-['Inter'] leading-6 word-wrap">About us</div>
                    <div className="text-black text-xl font-normal font-['Inter'] leading-6 word-wrap">Consultation</div>
                    <div className="self-stretch h-6 text-black text-xl font-normal font-['Inter'] leading-6 word-wrap">Our Class</div>
                </div>
            </div>
            <div className="w-[413px] h-[357px] pb-28 flex-col justify-start items-end gap-10 inline-flex">
                <div className="flex flex-col items-start self-stretch justify-start gap-6">
                    <div className="flex flex-col items-start self-stretch justify-start gap-2">
                        <div className="self-stretch text-black text-lg font-normal font-['DM Sans'] leading-[30px] word-wrap">+6289524134267</div>
                        <div className="self-stretch text-black text-lg font-normal font-['DM Sans'] leading-[30px] word-wrap">HorizonAgri@gmail.com</div>
                    </div>
                    <div className="self-stretch text-black text-lg font-normal font-['Inter'] leading-[30px] word-wrap">Jl. Sinar Bumi No. 88,          BSD City, Tangerang Selatan, 15339          Indonesia</div>
                </div>
                <div className="inline-flex items-center self-stretch justify-start gap-4">
                    <div className="relative w-12 h-12 bg-black rounded-lg">
                        <div className="w-[33px] h-[34px] left-2 top-2 absolute bg-white"></div>
                    </div>
                    <div className="relative w-12 h-12 bg-black rounded-lg"></div>
                    <div className="relative w-12 h-12 overflow-hidden bg-black rounded-lg">
                        <div className="w-[34.91px] h-[34.91px] left-[6.54px] top-[6.55px] absolute bg-white"></div>
                    </div>
                    <div className="relative w-12 h-12 bg-black rounded-lg">
                        <div className="w-9 h-[36.15px] left-[6.67px] top-[5.89px] absolute bg-white"></div>
                    </div>
                    <div className="relative w-12 h-12 bg-black rounded-lg">
                        <div className="w-[34px] h-[34px] left-2 top-2 absolute bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="w-[413px] h-[357px] justify-start items-start gap-28 flex">
                <div className="flex-1 h-[357px] flex-col justify-start items-start gap-[51px] inline-flex">
                    <div className="w-[191px] text-black text-3xl font-medium font-['Inter'] leading-8 word-wrap">Kirim Pesan pada Kami</div>
                    <div className="flex flex-col items-start self-stretch justify-start gap-6">
                        <div className="self-stretch flex-col justify-start items-start gap-[18px] flex">
                            <div className="flex flex-col items-start self-stretch justify-start gap-4">
                                <div className="self-stretch text-[#9F9F9F] text-lg font-normal font-['Inter'] leading-[30px] word-wrap">Nama</div>
                                <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                            </div>
                            <div className="flex flex-col items-start self-stretch justify-start gap-4">
                                <div className="self-stretch text-[#9F9F9F] text-lg font-normal font-['Inter'] leading-[30px] word-wrap">Alamat Email</div>
                                <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-black"></div>
                            </div>
                        </div>
                        <div className="px-6 py-2 rounded-3xl outline-1 outline-offset-[-1px] outline-black justify-start items-center gap-3.5 inline-flex">
                            <div className="text-black text-lg font-normal font-['Inter'] leading-[18px] word-wrap">Kirim</div>
                            <div className="relative w-6 h-6 overflow-hidden">
                                <div className="w-[18.75px] h-[15.75px] left-[2.62px] top-[4.12px] absolute bg-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch text-black text-lg font-normal font-['Manrope'] leading-[18px] word-wrap">Copyright © 2025 BRIX Templates | All Rights Reserved</div>
    </div>
  );
};

export default Footer;
