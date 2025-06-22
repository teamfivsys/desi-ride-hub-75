
import React from 'react';

interface LogoProps {
  className?: string;
}

const HeroLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <rect x="2" y="2" width="36" height="36" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="2"/>
      <text
        x="20"
        y="26"
        textAnchor="middle"
        className="text-xs font-bold fill-white"
      >
        HERO
      </text>
    </svg>
  );
};

export default HeroLogo;
