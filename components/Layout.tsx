
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-midnight overflow-x-hidden">
      {/* Texture & Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-30 mix-blend-overlay"></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-leather opacity-5 mix-blend-soft-light"></div>
      
      {/* Atmospheric Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-midnight/40 to-midnight"></div>
      
      <div className="relative z-10 w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
