
import React from 'react';
import { CustomButton } from '../components/CustomButton';

export const Home: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-6 lg:px-24">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex items-center gap-3 text-rose-gold/80">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Social Proof</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight text-white">
            Too real to stay <br/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-gold via-[#f2d0b5] to-rose-gold">inside the frame</span>
          </h1>
          
          <p className="text-cool-grey text-lg max-w-lg leading-relaxed font-light">
            Curated moments from the feed. A glimpse into the world of One-of-One photography, where every shot breaks the mold of the expected.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 mt-4">
            <CustomButton variant="outline">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
              Follow @Aneef
            </CustomButton>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-midnight bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/100/100?random=${i}')` }}></div>
                ))}
              </div>
              <span className="text-xs text-cool-grey/60 tracking-widest uppercase">12.5k Followers</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Framed Image Overlay Effect */}
          <div className="absolute w-[80%] h-[90%] border border-rose-gold/20 translate-x-6 translate-y-6 pointer-events-none"></div>
          
          <div className="relative z-10 w-[85%] aspect-[3/4] shadow-2xl overflow-hidden group transition-all duration-1000 transform -rotate-2 hover:rotate-0">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOmUZcIDD6Gos-jQJnQphKA_cvQ-_nK5JfUbR8MhkqFrYYNW-JdxUdCsguMXT9QyWx6WYpHiOeqpwRowQEHlUEW7puoXQ5lX_F6npjJwvsQVSQV0mwZaeqY5qarjYwt1IP-aeeOgyeawwjdC0075TbjD5nAkYBsdTjPVwfEBNPU5kI9v9rAyFG3zEe8LWYPMCb6bJoKYg3pdTM0jrC7P6NkncZexyj80gDamiPp8NltgA1Zan7yBwb6PccxzrDn2yW-oLESB3t2XO5" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              alt="Luxury Portrait"
            />
            <div className="absolute top-8 right-0 bg-midnight border border-rose-gold/40 px-4 py-2 translate-x-4 shadow-xl">
              <span className="text-[10px] font-bold text-rose-gold tracking-[0.3em] uppercase">@ANEEF_ONEOFONE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Negatives Section */}
      <section className="mt-40 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <h3 className="text-rose-gold text-sm font-light tracking-[0.4em] uppercase flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">grid_on</span>
            Recent Negatives
          </h3>
          <button className="text-[10px] text-cool-grey hover:text-rose-gold transition-colors flex items-center gap-2 uppercase tracking-widest font-bold">
            View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsY0xb0Pv5mGjdHWPy9XoiU5mieD4GJSpIgVVxf6Gw2BAdgtwJpIWVOmrZ6Aq0JotS2EC94Vc6cSBwMOdG2GrrD7NbBZeqj1T3y8UYRWfLq7hpd5nljzChDnzvNGfhRJO27CQXSi-gPmjKWx8VduVwXetCnhAkOBIP2ci5APMSULpLbCbIR0BjXFgXXJMJQe1H_Sqe1lAafiucA1z9tgNQj0RuUDtxUz8dYlP_xDkREyAy-kGc4S3mtUkM-8BFnV9giBc4plL3D9nV", name: "KODAK PORTRA 400", exp: "24" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDwdsqXDrK6EzRAc1v9N8VSNZ3iD0nhf24a_vY64eiFFUTCmaeSmhahLEyOYZycvldxng6RNhiwpcDArfJKSur6zSTJ7GCZnUNikwbAfDiqN-Q2Bjc1Hi2-jWDCNlXVcNMJO589IfeOuh-oLAZdk4KXqMAMaMSDW4PR9AS-jzYovYJdAAaxzPGUZiYxuYPzwQwN_vjqfx1ijxI9Bb7Q2hNavmp0NkLin4tVUATAGkd-aXqM1WDoHtnIWI50nP1peRMOybzlEzEhekf", name: "ILFORD HP5", exp: "25" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaOQ4HHG4jWSXhREpaxS2xBJLpXcoT6MEm4bzBcETu5eyiF1-Wv6bZ6JqdlbNLJ9yCdh-yN8mSqbT3xV5ixqYFVAchzI_-R_c4RMZ0ZN5WRHXyX50v6ETg8zpPSrI738V0Q7SAtBC4WLsxacq_WQXcPEhSkdxQ9tFtrQhOK12k6b1MruBAFVPduo_Ls2z5JxxuGWW1bDpSEr9eNscBeO8eSAHsE1T5m0uuAEoMFUhmGjhTabYUbyPswJpNE-WWy6xZ3oF-FEl9kwh8", name: "CINESTILL 800T", exp: "26" }
          ].map((neg, idx) => (
            <div key={idx} className="relative bg-black p-1 group cursor-pointer transition-all duration-500 hover:-translate-y-4 border border-white/5 shadow-2xl">
              {/* Film Sprockets emulation */}
              <div className="absolute -top-4 left-0 w-full h-3 flex justify-around opacity-40">
                {Array.from({length: 8}).map((_, i) => <div key={i} className="w-4 h-full bg-white/10 rounded-sm"></div>)}
              </div>
              
              <div className="relative overflow-hidden aspect-[4/5] border-x-[12px] border-black">
                <img src={neg.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={neg.name} />
                <div className="absolute inset-0 bg-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-rose-gold text-5xl">favorite</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-0 text-[9px] font-mono text-rose-gold/70 font-bold tracking-[0.2em] rotate-90 origin-right translate-x-4">
                {neg.name}
              </div>
              <div className="absolute top-6 left-0 text-[9px] font-mono text-rose-gold/70 font-bold tracking-[0.2em] -rotate-90 origin-left -translate-x-4">
                EXP. {neg.exp}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
