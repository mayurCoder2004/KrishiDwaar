// src/components/Logo.jsx
import React from 'react';

const Logo = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun */}
    <circle cx="60" cy="30" r="10" fill="#FFC107" />
    
    {/* Rays */}
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={60}
          y1={30}
          x2={60 + 18 * Math.cos(angle)}
          y2={30 + 18 * Math.sin(angle)}
          stroke="#FFD54F"
          strokeWidth="2"
        />
      );
    })}

    {/* Field */}
    <path
      d="M20 100 Q60 60, 100 100"
      fill="none"
      stroke="#4CAF50"
      strokeWidth="6"
    />
    
    {/* Door / Gateway */}
    <rect x="50" y="60" width="20" height="40" rx="4" fill="#8D6E63" />
    <circle cx="65" cy="80" r="2" fill="#FFF" />

    {/* Plant inside the door */}
    <path
      d="M60 85 Q58 75, 60 65 Q62 75, 60 85"
      fill="none"
      stroke="#81C784"
      strokeWidth="2"
    />
  </svg>
);

export default Logo;
