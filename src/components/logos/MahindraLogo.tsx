
import React from 'react';

interface LogoProps {
  className?: string;
}

const MahindraLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M14 28c2-2 4-4 6-6s4-4 6-6c0 2-1 4-2 6s-2 4-4 6h-6z"
        fill="#ffffff"
      />
      <path
        d="M16 12l4 4 4-4h4l-6 6-2 2-2-2-6-6h4z"
        fill="#ffffff"
      />
    </svg>
  );
};

export default MahindraLogo;
