
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="px-6 lg:px-40 flex flex-col items-center justify-center mb-16">
        <h1 className="text-white tracking-tighter text-6xl md:text-8xl font-bold leading-none text-center mb-4">Gallery</h1>
        <p className="text-rose-gold mt-2 text-xs uppercase tracking-[0.4em] font-medium border-t border-rose-gold/30 pt-4 px-12">
          One-of-One Showcase
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-16">
        {['The Drive', 'The Aura', 'The Circle'].map((cat) => (
          <button 
            key={cat} 
            className={`px-10 py-3 text-[10px] font-bold tracking-[0.3em] uppercase border border-rose-gold transition-all duration-500 ${
              cat === 'The Drive' ? 'bg-rose-gold text-midnight' : 'bg-transparent text-rose-gold hover:bg-rose-gold/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="w-full pl-6 lg:pl-24 overflow-hidden relative group">
        {/* Decorative Line */}
        <div className="absolute left-6 lg:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-gold/20 to-transparent z-10"></div>
        
        <div className="flex overflow-x-auto hide-scrollbar pb-20 pt-4 px-4 lg:px-0 gap-12 lg:gap-20 items-end">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className={`group relative flex-shrink-0 flex flex-col gap-8 transition-all duration-700 ${
              item.aspectRatio === 'video' ? 'w-[85vw] lg:w-[700px]' : 'w-[80vw] lg:w-[450px]'
            }`}>
              <div className={`relative w-full overflow-hidden border border-leather-navy group-hover:border-rose-gold transition-all duration-700 bg-[#05070c] shadow-2xl ${
                item.aspectRatio === 'video' ? 'aspect-video' : 'aspect-[4/5]'
              }`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 contrast-[1.1] sepia-[10%]"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(10,14,23,0.7)] pointer-events-none"></div>
              </div>

              <div className="flex flex-col gap-2 opacity-60 group-hover:opacity-100 transition-all duration-500 px-2">
                <div className="flex items-end justify-between border-b border-rose-gold/30 pb-4 mb-2">
                  <h3 className="text-white text-2xl font-serif font-medium tracking-wide">{item.title}</h3>
                  <span className="text-rose-gold text-[9px] tracking-[0.3em] uppercase font-bold">1 OF 1</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-widest text-cool-grey/80">{item.location}</span>
                    <span className="text-[9px] font-mono text-rose-gold/50 mt-1 uppercase">{item.specs}</span>
                  </div>
                  <button className="h-10 w-10 flex items-center justify-center border border-rose-gold/20 rounded-full hover:bg-rose-gold hover:text-midnight transition-all">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="w-24 flex-shrink-0"></div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4 text-cool-grey/30 text-[10px] tracking-[0.5em] uppercase mt-12 font-bold">
        <div className="flex items-center gap-6">
          <span className="h-px w-20 bg-white/10"></span>
          Drag to Explore
          <span className="h-px w-20 bg-white/10"></span>
        </div>
      </div>
    </main>
  );
};
