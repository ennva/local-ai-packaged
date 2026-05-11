
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  variant?: 'fluid' | 'technical' | 'hybrid';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  withText = true,
  variant = 'fluid',
  className = ''
}) => {
  const sizeClasses = {
    sm: { svg: 'w-10 h-10', text: 'text-lg' },
    md: { svg: 'w-14 h-14', text: 'text-2xl' },
    lg: { svg: 'w-20 h-20', text: 'text-3xl' },
  };

  // Fluid Logo - Organic wave/flow inspired (Default)
  const FluidLogo = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={sizeClasses[size].svg}
    >
      <path
        d="M20 30 Q30 20, 50 25 T80 30 Q85 40, 80 50 T50 75 Q30 80, 20 70 T20 30"
        fill="#00BFA6"
        opacity="0.3"
      />
      <path
        d="M25 35 Q35 28, 50 32 T75 38 Q78 45, 75 52 T50 70 Q35 73, 25 65 T25 35"
        fill="#00BFA6"
        opacity="0.6"
      />
      <path
        d="M50 30 L62 45 L50 60 L38 45 Z"
        fill="#0D3B66"
      />
      <path
        d="M50 38 L56 45 L50 52 L44 45 Z"
        fill="#FFD700"
        opacity="0.8"
      />
    </svg>
  );

  // Technical Logo - Geometric network/infrastructure
  const TechnicalLogo = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={sizeClasses[size].svg}
    >
      <path
        d="M50 15 L75 30 L75 60 L50 75 L25 60 L25 30 Z"
        fill="#0D3B66"
      />
      <path
        d="M50 25 L67 35 L67 55 L50 65 L33 55 L33 35 Z"
        fill="#00BFA6"
      />
      <circle cx="50" cy="50" r="8" fill="#FFD700" />
      <circle cx="50" cy="30" r="3" fill="#FFD700" />
      <circle cx="62" cy="42" r="3" fill="#FFD700" />
      <circle cx="62" cy="58" r="3" fill="#FFD700" />
      <circle cx="50" cy="70" r="3" fill="#FFD700" />
      <circle cx="38" cy="58" r="3" fill="#FFD700" />
      <circle cx="38" cy="42" r="3" fill="#FFD700" />
      <line x1="50" y1="30" x2="50" y2="42" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="58" x2="50" y2="70" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="62" y2="42" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="62" y2="58" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="38" y2="42" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="38" y2="58" stroke="#F5F5F5" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );

  // Hybrid Logo - Combination of fluid and technical
  const HybridLogo = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={sizeClasses[size].svg}
    >
      <defs>
        <linearGradient id={`fluidGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0D3B66" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="50" rx="35" ry="40" fill={`url(#fluidGradient-${size})`} />
      <rect x="35" y="25" width="30" height="30" fill="#0D3B66" opacity="0.8" transform="rotate(45 50 40)" />
      <path
        d="M50 28 L62 40 L50 62 L38 40 Z"
        fill="#0D3B66"
        stroke="#00BFA6"
        strokeWidth="2"
      />
      <path
        d="M30 45 Q40 50, 50 48"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M50 48 Q60 46, 70 50"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <circle cx="50" cy="45" r="5" fill="#FFD700" />
    </svg>
  );

  const renderLogo = () => {
    switch (variant) {
      case 'fluid':
        return <FluidLogo />;
      case 'technical':
        return <TechnicalLogo />;
      case 'hybrid':
        return <HybridLogo />;
      default:
        return <FluidLogo />;
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {renderLogo()}
      {withText && (
        <div className={`font-montserrat font-bold ${sizeClasses[size].text} leading-tight`}>
          <span className="text-primary">Secura</span>
          <span className="text-secondary">Ops</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
