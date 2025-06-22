
import React from 'react';

interface LogoProps {
  className?: string;
}

const RoyalEnfieldLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#16a34a" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M10 20h6l2-4 4 8 4-8 2 4h6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="15" r="2" fill="#ffffff"/>
    </svg>
  );
};

export default RoyalEnfieldLogo;
