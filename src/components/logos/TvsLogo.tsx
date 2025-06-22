
import React from 'react';

interface LogoProps {
  className?: string;
}

const TvsLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <rect x="2" y="2" width="36" height="36" rx="4" fill="#dc2626" stroke="#ffffff" strokeWidth="2"/>
      <text
        x="20"
        y="26"
        textAnchor="middle"
        className="text-xs font-bold fill-white"
      >
        TVS
      </text>
    </svg>
  );
};

export default TvsLogo;
