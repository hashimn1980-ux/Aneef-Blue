
import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'outline' | 'filled' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'outline', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-none relative overflow-hidden group";
  
  const variants = {
    outline: "border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-midnight shadow-[0_0_15px_rgba(207,169,134,0.1)]",
    filled: "bg-rose-gold text-midnight border border-rose-gold hover:bg-white hover:border-white shadow-[0_0_20px_rgba(207,169,134,0.3)]",
    ghost: "text-rose-gold hover:text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </button>
  );
};
