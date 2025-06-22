
import React from 'react';

interface LogoProps {
  className?: string;
}

const MarutiLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#1e40af" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M12 26c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4z"
        fill="#ffffff"
      />
      <text
        x="20"
        y="16"
        textAnchor="middle"
        className="text-xs font-bold fill-white"
      >
        S
      </text>
    </svg>
  );
};

export default MarutiLogo;
