import React from 'react';

const SocialProof = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 p-6 md:p-10 bg-white">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-6 flex flex-col justify-start gap-4 text-center">
            <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Metropolis'] leading-tight">400+</div>
            <div className="text-gray-600 text-base md:text-lg font-normal font-['Manrope'] leading-relaxed">Petani yang telah bergabung dan meningkatkan hasil panen mereka.</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-6 flex flex-col justify-start gap-4 text-center">
            <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Metropolis'] leading-tight">250+</div>
            <div className="text-gray-600 text-base md:text-lg font-normal font-['Manrope'] leading-relaxed">Jumlah kursus yang tersedia untuk meningkatkan pengetahuan Anda.</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-6 flex flex-col justify-start gap-4 text-center">
            <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Metropolis'] leading-tight">150+</div>
            <div className="text-gray-600 text-base md:text-lg font-normal font-['Manrope'] leading-relaxed">Jumlah mentor ahli yang siap membimbing Anda.</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-6 flex flex-col justify-start gap-4 text-center">
            <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Metropolis'] leading-tight">1st</div>
            <div className="text-gray-600 text-base md:text-lg font-normal font-['Manrope'] leading-relaxed">Peringkat platform kami di antara platform edukasi pertanian lainnya.</div>
        </div>
    </div>
  );
};

export default SocialProof;
