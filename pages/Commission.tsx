
import React from 'react';
import { CustomButton } from '../components/CustomButton';

export const Commission: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <div className="relative z-10 w-full max-w-[550px] flex flex-col items-center">
        <div className="text-center mb-20 space-y-6">
          <p className="text-rose-gold/80 text-[10px] tracking-[0.5em] uppercase font-bold">One-of-One Photography</p>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-light tracking-tight leading-none">
            Commission a<br/>
            <span className="italic font-light text-rose-gold text-4xl md:text-6xl">Masterpiece</span>
          </h1>
        </div>

        <form className="w-full space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="group relative">
            <label className="block mb-4 text-rose-gold text-[10px] tracking-[0.3em] uppercase font-bold">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-0 border-b border-white/10 text-white text-lg py-4 px-0 focus:ring-0 focus:border-rose-gold placeholder-white/5 transition-all duration-500 font-light tracking-wide uppercase"
              placeholder="Enter your full name"
            />
          </div>

          <div className="group relative">
            <label className="block mb-4 text-rose-gold text-[10px] tracking-[0.3em] uppercase font-bold">Vision</label>
            <textarea 
              rows={1}
              className="w-full bg-transparent border-0 border-b border-white/10 text-white text-lg py-4 px-0 focus:ring-0 focus:border-rose-gold placeholder-white/5 resize-none transition-all duration-500 font-light tracking-wide uppercase"
              placeholder="Tell us your story..."
            ></textarea>
          </div>

          <div className="group relative">
            <label className="block mb-4 text-rose-gold text-[10px] tracking-[0.3em] uppercase font-bold">Preferred Date</label>
            <input 
              type="text" 
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
              className="w-full bg-transparent border-0 border-b border-white/10 text-white text-lg py-4 px-0 focus:ring-0 focus:border-rose-gold placeholder-white/5 transition-all duration-500 font-light tracking-wide uppercase"
              placeholder="Select a date"
            />
          </div>

          <div className="pt-10">
            <CustomButton type="submit" variant="filled" className="w-full py-5 text-sm">
              Request Booking
            </CustomButton>
          </div>
        </form>

        <div className="mt-24 text-center opacity-30">
          <p className="text-[9px] tracking-[0.5em] text-white uppercase font-bold">© 2025 ANEEF. ONE-OF-ONE.</p>
        </div>
      </div>
    </main>
  );
};
