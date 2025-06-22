
import React from 'react';

interface LogoProps {
  className?: string;
}

const HondaLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <rect x="2" y="2" width="36" height="36" rx="18" fill="#dc2626" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M12 16h4v8h4v-8h4v12h-4v-4h-4v4h-4V16z"
        fill="#ffffff"
      />
    </svg>
  );
};

export default HondaLogo;
