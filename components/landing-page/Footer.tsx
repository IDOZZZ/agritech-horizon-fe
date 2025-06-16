import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  ArrowRightIcon, InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
  return (
    <div className="p-20 bg-white">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 pb-12">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <Image src="/img/horizon-logo-green.png" alt="Horizon Logo" width={220} height={40}/>
                    <p className="text-black text-lg font-normal font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus</p>
                </div>
                <div className="flex flex-col gap-4">
                    <Link href={"#"} className="text-black text-xl font-normal font-['Inter']">About us</Link>
                    <Link href={"#"} className="text-black text-xl font-normal font-['Inter']">Consultation</Link>
                    <Link href={"#"} className="h-6 text-black text-xl font-normal font-['Inter']">Our Class</Link>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="self-stretch flex flex-col gap-6">
                    <div className="flex flex-col">
                        <p className="text-black text-lg font-normal font-['DM Sans']">+6289524134267</p>
                        <p className="text-black text-lg font-normal font-['DM Sans']">HorizonAgri@gmail.com</p>
                    </div>
                    <div className="self-stretch text-black text-lg font-normal font-['Inter']">Jl. Sinar Bumi No. 88, BSD City, Tangerang Selatan, 15339 Indonesia</div>
                </div>
                <div className="self-stretch flex justify-start items-center gap-4">
                    <div className="w-12 h-12 relative bg-black rounded-lg p-1">
                        <InstagramLogoIcon size={40} weight='bold' color='#FFFFFF' />
                    </div>
                    <div className="w-12 h-12 relative bg-black rounded-lg p-1">
                        <WhatsappLogoIcon size={40} color='#FFFFFF' />
                    </div>
                    <div className="w-12 h-12 relative bg-black rounded-lg p-1">
                        <LinkedinLogoIcon size={40} weight='bold' color='#FFFFFF' />
                    </div>
                </div>
            </div>
            <div className="max-w-md w-full bg-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Kirim Pesan pada Kami</h2>
                <form action="#" method="POST">
                    <div className="mb-8">
                        <input type="text" id="name" name="name" className="w-full appearance-none bg-transparent border-0 border-b border-gray-300 text-gray-900 pt-2 focus:outline-none focus:ring-0 focus:border-black" placeholder='Nama'/>
                    </div>
                    <div className="mb-10">
                        <input type="email" id="email" name="email" className="w-full appearance-none bg-transparent border-0 border-b border-gray-300 text-gray-900 pt-2 focus:outline-none focus:ring-0 focus:border-black" placeholder='Email'/>
                    </div>
                    <button type="submit" className="inline-flex px-6 py-2 rounded-3xl outline-1 outline-offset-[-1px] outline-black justify-start items-center gap-3.5 hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <span className="text-black text-lg font-normal font-['Inter']">Kirim</span>
                        <ArrowRightIcon size={24} weight='bold' />
                    </button>
                </form>
                </div>
        </div>
        <p className="text-black text-lg font-normal font-['Manrope']">Copyright © 2025 Horizon Agritech | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
