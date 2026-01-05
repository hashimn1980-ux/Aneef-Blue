
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="fixed top-0 w-full z-[100] px-6 py-6 lg:px-12 flex items-center justify-between bg-gradient-to-b from-midnight/90 to-transparent pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto cursor-pointer" onClick={() => setCurrentPage('home')}>
        <h1 className="text-white text-xl lg:text-2xl font-display font-bold tracking-[0.3em] hover:text-rose-gold transition-colors">ANEEF</h1>
        <span className="hidden sm:inline-block h-4 w-px bg-cool-grey/30"></span>
        <span className="hidden sm:block text-[10px] text-cool-grey tracking-[0.4em] uppercase font-light">One-of-One</span>
      </div>

      <div className="flex items-center gap-8 pointer-events-auto">
        <nav className="hidden md:flex gap-8">
          {(['home', 'gallery', 'philosophy', 'experience', 'commission'] as Page[]).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                currentPage === page ? 'text-rose-gold font-bold' : 'text-cool-grey hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
        
        <button className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-rose-gold hover:text-white transition-colors">
          <span className="hidden sm:block">MENU</span>
          <div className="flex flex-col gap-1.5 items-end w-6">
            <span className="h-[1px] w-6 bg-rose-gold group-hover:bg-white transition-all"></span>
            <span className="h-[1px] w-4 bg-rose-gold group-hover:bg-white transition-all group-hover:w-6"></span>
          </div>
        </button>
      </div>
    </header>
  );
};
