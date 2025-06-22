
import React from 'react';

interface LogoProps {
  className?: string;
}

const BajajLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#ea580c" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M12 16h6c2 0 4 2 4 4s-2 4-4 4h-2v4h-4V16zm4 6h2c1 0 2-1 2-2s-1-2-2-2h-2v4z"
        fill="#ffffff"
      />
    </svg>
  );
};

export default BajajLogo;
