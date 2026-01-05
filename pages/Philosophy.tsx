
import React from 'react';
import { CustomButton } from '../components/CustomButton';

export const Philosophy: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row pt-20 lg:pt-0">
      {/* Left side: Dramatic Cinematic Visual - Updated with provided MP4 link */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen overflow-hidden group">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.8] opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[4000ms] ease-out"
        >
          <source src="https://github.com/Alameenkhaled/AMeen/raw/refs/heads/main/f0z62pbsynrme0cv3bnaypbk34_result_.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-midnight via-midnight/30 to-transparent pointer-events-none"></div>
        
        {/* Floating Label for Mobile */}
        <div className="absolute bottom-10 left-10 lg:hidden">
          <span className="text-rose-gold text-[10px] tracking-[0.4em] uppercase font-bold border-b border-rose-gold/40 pb-2">The Vision</span>
        </div>
      </div>

      {/* Right side: Statement */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-20 bg-midnight relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="grid grid-cols-6 h-full w-full">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-rose-gold"></div>
            ))}
          </div>
        </div>

        <div className="max-w-xl relative z-10">
          <div className="flex items-center gap-6 mb-12 animate-[fadeIn_1s_ease-out]">
            <span className="h-px w-16 bg-rose-gold/50"></span>
            <span className="text-rose-gold text-xs tracking-[0.4em] uppercase font-bold">Philosophy</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-display text-white mb-12 leading-[1.1] animate-[fadeIn_1.2s_ease-out]">
            The Definition <br/>
            <span className="italic font-serif font-light text-4xl lg:text-5xl opacity-70 text-cool-grey">of</span> 
            <span className="text-rose-gold"> Aneef</span>
          </h2>

          <div className="flex items-center gap-4 mb-12 opacity-40">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-gold"></span>
            <span className="material-symbols-outlined text-rose-gold">diamond</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-gold"></span>
          </div>

          <div className="space-y-8 text-lg lg:text-xl font-light leading-relaxed text-cool-grey/80 animate-[fadeIn_1.4s_ease-out]">
            <p>
              In an era of endless copies, <span className="text-rose-gold font-medium">Aneef</span> stands for the untouched. The unprecedented.
            </p>
            <p>
              My lens does not capture moments; it creates a <span className="text-rose-gold uppercase tracking-[0.2em] font-bold border-b border-rose-gold/20 pb-1">'One-of-One'</span> legacy that has never been seen before.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center gap-12 animate-[fadeIn_1.6s_ease-out]">
            <div className="w-24 opacity-80 filter invert-0 contrast-100">
               <svg className="w-full text-rose-gold" fill="none" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 10 C 75 10 70 15 70 20 C 70 25 75 30 60 35 C 40 42 20 35 15 25 C 12 20 20 15 30 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                <path d="M50 15 L 53 12 L 56 15 L 53 18 Z" fill="currentColor"></path>
              </svg>
            </div>
            
            <CustomButton variant="outline">
              View The Collection
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </CustomButton>
          </div>
        </div>

        {/* Decorative large 'A' */}
        <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.02] select-none pointer-events-none transform rotate-12">
          <span className="text-[30rem] font-display text-rose-gold leading-none">A</span>
        </div>
      </div>
    </main>
  );
};
