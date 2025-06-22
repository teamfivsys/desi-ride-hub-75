
import React from 'react';

interface LogoProps {
  className?: string;
}

const HyundaiLogo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <ellipse cx="20" cy="20" rx="18" ry="18" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
      <path
        d="M12 20h6v8h4v-8h6v-4h-6v-4h-4v4h-6z"
        fill="#ffffff"
      />
    </svg>
  );
};

export default HyundaiLogo;
