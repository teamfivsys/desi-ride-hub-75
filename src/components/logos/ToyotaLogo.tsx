
import React from 'react';

interface LogoProps {
  className?: string;
}

const ToyotaLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#ffffff" strokeWidth="2"/>
      <ellipse cx="20" cy="20" rx="12" ry="8" fill="none" stroke="#ffffff" strokeWidth="2"/>
      <ellipse cx="20" cy="20" rx="8" ry="12" fill="none" stroke="#ffffff" strokeWidth="2"/>
      <circle cx="20" cy="20" r="4" fill="none" stroke="#ffffff" strokeWidth="2"/>
    </svg>
  );
};

export default ToyotaLogo;
