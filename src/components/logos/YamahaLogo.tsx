
import React from 'react';

interface LogoProps {
  className?: string;
}

const YamahaLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#7c3aed" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M16 12v16M24 12v16M20 12v8"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 20h12"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default YamahaLogo;
