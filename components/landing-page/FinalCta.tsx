import React from 'react';

const FinalCta = () => {
  return (
    <div className="self-stretch px-20 py-28 bg-[#0F5028] flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch text-center">
          <p className="text-white text-6xl font-semibold font-heading leading-20 mb-4">Belajar Pertanian Lebih Mudah. Lebih Nyata. Lebih Berdampak.<br/></p>
          <p className="text-white text-4xl font-normal font-heading leading-12">Akses materi aplikatif, mentor berpengalaman, dan komunitas petani seluruh Indonesia.</p>
        </div>
        <div className="justify-start items-center gap-5 inline-flex">
            <div data-color="Primary" data-kind="Primary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 bg-white rounded-sm">
                <div className="text-center text-[#0F5028] text-base font-medium font-['Manrope'] leading-6">Belajar Sekarang</div>
            </div>
            <div data-color="Secondary" data-kind="Secondary" data-round="Squire" data-state="Default" className="h-11 px-7 py-3 rounded-sm outline-1 outline-offset-[-1px] outline-white">
                <div className="text-center text-white text-base font-medium font-['Manrope'] leading-6">Lihat Selengkapnya</div>
            </div>
        </div>
    </div>
  );
};

export default FinalCta;
