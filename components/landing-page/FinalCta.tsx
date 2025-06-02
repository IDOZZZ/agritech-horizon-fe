import React from 'react';

const FinalCta = () => {
  return (
    <div className="self-stretch px-20 py-[120px] bg-[#0F5028] flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch text-center"><span className="text-white text-6xl font-semibold font-['Metropolis'] leading-[72px] word-wrap">Belajar Pertanian Lebih Mudah. Lebih Nyata. Lebih Berdampak.<br/></span><span className="text-white text-4xl font-normal font-['Metropolis'] leading-[48px] word-wrap">Akses materi aplikatif, mentor berpengalaman, dan komunitas petani seluruh Indonesia.</span></div>
        <div className="justify-start items-center gap-5 inline-flex">
            <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="w-[197px] h-11 px-7 py-3 bg-white rounded-sm justify-center items-center gap-2.5 flex">
                <div className="text-center text-[#0F5028] text-base font-medium font-['Manrope'] leading-6 word-wrap">Belajar Sekarang</div>
            </div>
            <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="w-[196px] h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-white justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-base font-medium font-['Manrope'] leading-6 word-wrap">Lihat Selengkapnya</div>
            </div>
        </div>
    </div>
  );
};

export default FinalCta;
