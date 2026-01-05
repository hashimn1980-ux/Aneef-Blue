
import React from 'react';
import { SERVICES } from '../constants';
import { CustomButton } from '../components/CustomButton';

export const Experience: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-6 lg:px-24 min-h-screen flex flex-col items-center">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight uppercase">The Experience</h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto opacity-70"></div>
        <p className="text-rose-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
          Curated Service Offerings | One-of-One Photography
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1400px] w-full">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group relative flex flex-col justify-between h-[600px] lg:h-[700px] bg-[#111620]/50 p-12 transition-all duration-700 hover:scale-[1.02] border border-white/5 hover:border-rose-gold/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-white/10 font-bold text-7xl group-hover:text-rose-gold/20 transition-colors duration-700">{service.number}</span>
              <div className="p-5 rounded-full bg-rose-gold/10 group-hover:bg-rose-gold/20 transition-all duration-500">
                <span className="material-symbols-outlined text-rose-gold text-4xl">{service.icon}</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto flex flex-col gap-8 transform transition-transform duration-700 group-hover:-translate-y-4">
              <div className="space-y-4">
                <h3 className="text-white text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight">{service.title}</h3>
                <p className="text-rose-gold text-xs font-bold tracking-[0.2em] uppercase opacity-90">{service.subtitle}</p>
                <p className="text-cool-grey text-sm leading-relaxed max-w-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-700 delay-100">
                  {service.description}
                </p>
              </div>
              
              <button className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200 group/btn">
                <span className="border-b border-rose-gold pb-1 group-hover/btn:border-white transition-all">View Case Study</span>
                <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <CustomButton variant="filled">Book Exclusive Session</CustomButton>
      </div>
    </main>
  );
};
