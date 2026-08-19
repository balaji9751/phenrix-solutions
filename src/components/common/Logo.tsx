import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showText?: boolean;
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical' | 'mark-only';
}

/**
 * Beautiful Symmetrical Wing Emblem (Abstract Phoenix Wings & Cross Symbol)
 * High-fidelity curves modeled directly from the blue wings logo design.
 */
export const PhenrixPSEmblem: React.FC<{ 
  className?: string; 
  size?: number;
  variant?: 'light' | 'dark';
}> = ({ 
  className = "", 
  size = 40,
  variant = 'dark'
}) => {
  const gradientId = `phenrix-blue-metallic-${variant}`;
  const isDarkLogo = variant === 'dark'; // True if logo is rendered on a light background

  // Dynamic blue stops matching the reference image precisely
  const stop1 = isDarkLogo ? "#0A2540" : "#3B82F6"; // Dark deep blue vs royal blue
  const stop2 = isDarkLogo ? "#0048C0" : "#60A5FA"; // Mid blue vs sky blue
  const stop3 = isDarkLogo ? "#007DFF" : "#93C5FD"; // Cobalt blue vs light blue
  const stop4 = isDarkLogo ? "#00A2FF" : "#06B6D4"; // Sky blue vs cyan glow
  const stop5 = isDarkLogo ? "#00C3FF" : "#38BDF8"; // Luminous cyan vs sky cyan

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-all duration-300 hover:scale-105 ${className}`}
      width={size}
      height={size}
      aria-label="Phenrix Symmetrical Blue Wings Emblem"
    >
      <defs>
        {/* Symmetrical blue gradient stops adjusted dynamically */}
        <linearGradient id={gradientId} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={stop1} />
          <stop offset="25%" stopColor={stop2} />
          <stop offset="50%" stopColor={stop3} />
          <stop offset="75%" stopColor={stop4} />
          <stop offset="100%" stopColor={stop5} />
        </linearGradient>
        
        {/* Soft shadow filter to give a floating 3D luxury look */}
        <filter id="blue-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#2563EB" floodOpacity={isDarkLogo ? "0.15" : "0.35"} />
        </filter>
      </defs>

      <g filter="url(#blue-shadow)">
        {/* Left Wing Group */}
        <g>
          {/* Upper Wing Sweep */}
          <path
            d="M 60 62 C 54 58 38 42 20 22 C 26 35 48 52 60 54 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Middle Wing Sweep */}
          <path
            d="M 60 70 C 52 67 36 54 18 36 C 24 45 48 58 60 61 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Lower Wing Sweep */}
          <path
            d="M 60 78 C 54 75 40 64 26 52 C 32 58 48 68 60 69 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Base Anchor Leg */}
          <path
            d="M 60 60 C 55 66 46 78 35 94 C 45 94 55 80 60 70 Z"
            fill={`url(#${gradientId})`}
          />
        </g>

        {/* Right Wing Group (Mirrored horizontally around center X = 60) */}
        <g transform="translate(120, 0) scale(-1, 1)">
          {/* Upper Wing Sweep */}
          <path
            d="M 60 62 C 54 58 38 42 20 22 C 26 35 48 52 60 54 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Middle Wing Sweep */}
          <path
            d="M 60 70 C 52 67 36 54 18 36 C 24 45 48 58 60 61 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Lower Wing Sweep */}
          <path
            d="M 60 78 C 54 75 40 64 26 52 C 32 58 48 68 60 69 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Base Anchor Leg */}
          <path
            d="M 60 60 C 55 66 46 78 35 94 C 45 94 55 80 60 70 Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
    </svg>
  );
};

/**
 * Wordmark styled in precise blue colors matching the reference image.
 */
export const PhenrixWordmark: React.FC<{
  className?: string;
  variant?: 'light' | 'dark';
}> = ({
  className = "h-7",
  variant = 'dark'
}) => {
  const isDarkLogo = variant === 'dark'; // True on light background
  const primaryBlue = isDarkLogo ? "#0033a0" : "#ffffff"; // Deep corporate blue vs white
  const secondaryBlue = isDarkLogo ? "#0077e6" : "#60a5fa"; // Mid-blue vs light blue

  return (
    <div className={`flex flex-col select-none ${className}`} style={{ fontSize: 'inherit' }}>
      <span style={{ color: primaryBlue, fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: '1' }}>
        Phenrix
      </span>
      <div className="flex items-center gap-1.5 mt-1">
        <span className="h-px w-2.5 opacity-60" style={{ backgroundColor: secondaryBlue }} />
        <span style={{ color: secondaryBlue, fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.52em', lineHeight: '1' }}>
          Solutions
        </span>
        <span className="h-px w-2.5 opacity-60" style={{ backgroundColor: secondaryBlue }} />
      </div>
    </div>
  );
};

/**
 * Complete Full Logo Display (Emblem + "PHENRIX SOLUTIONS" with flanking lines) in Blue
 */
export const PhenrixFullLogo: React.FC<{
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}> = ({
  className = "",
  variant = 'dark',
  size = 'md'
}) => {
  const isDarkLogo = variant === 'dark';
  const primaryBlue = isDarkLogo ? "#0033a0" : "#ffffff";
  const secondaryBlue = isDarkLogo ? "#0077e6" : "#60a5fa";

  const scaleMap = {
    sm: { emblemSize: 42, fontSize: 'text-sm', subtextSize: 'text-[8px]', spacing: '0.15em', subSpacing: '0.25em', lineWidth: 'w-2' },
    md: { emblemSize: 56, fontSize: 'text-base', subtextSize: 'text-[10px]', spacing: '0.2em', subSpacing: '0.3em', lineWidth: 'w-3' },
    lg: { emblemSize: 72, fontSize: 'text-lg', subtextSize: 'text-xs', spacing: '0.25em', subSpacing: '0.35em', lineWidth: 'w-4' }
  };

  const current = scaleMap[size];

  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Symmetrical Blue Wing Emblem */}
      <div className="mb-2">
        <PhenrixPSEmblem size={current.emblemSize} variant={variant} />
      </div>

      {/* "PHENRIX" Text */}
      <div className={`${current.fontSize} font-extrabold tracking-widest`} style={{ color: primaryBlue, textTransform: 'uppercase', letterSpacing: current.spacing }}>
        Phenrix
      </div>

      {/* "— SOLUTIONS —" Subtitle with horizontal flanking lines */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5">
        <span className={`h-px ${current.lineWidth} opacity-60`} style={{ backgroundColor: secondaryBlue }} />
        <span className={`${current.subtextSize} font-bold uppercase`} style={{ color: secondaryBlue, letterSpacing: current.subSpacing, lineHeight: '1' }}>
          Solutions
        </span>
        <span className={`h-px ${current.lineWidth} opacity-60`} style={{ backgroundColor: secondaryBlue }} />
      </div>
    </div>
  );
};

/**
 * Universal Brand Logo Component
 */
export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 'md',
  variant = 'dark',
  showText = true,
  showTagline = true,
  layout = 'horizontal'
}) => {
  if (layout === 'vertical') {
    return <PhenrixFullLogo size={size === 'lg' || size === 'xl' ? 'lg' : size === 'xs' || size === 'sm' ? 'sm' : 'md'} variant={variant} className={className} />;
  }

  if (layout === 'mark-only') {
    const markSizes = { xs: 28, sm: 36, md: 48, lg: 60, xl: 72 };
    return <PhenrixPSEmblem size={markSizes[size]} variant={variant} className={className} />;
  }

  const isDarkLogo = variant === 'dark';
  const primaryBlue = isDarkLogo ? "#0033a0" : "#ffffff";
  const secondaryBlue = isDarkLogo ? "#0077e6" : "#60a5fa";

  const sizeMap = {
    xs: { icon: 28, textSize: 'text-xs', taglineSize: 'text-[7px]', mt: '1px', lineWidth: 'w-2' },
    sm: { icon: 36, textSize: 'text-sm', taglineSize: 'text-[8px]', mt: '2px', lineWidth: 'w-2.5' },
    md: { icon: 44, textSize: 'text-base', taglineSize: 'text-[10px]', mt: '2px', lineWidth: 'w-3' },
    lg: { icon: 52, textSize: 'text-lg', taglineSize: 'text-xs', mt: '3px', lineWidth: 'w-3.5' },
    xl: { icon: 64, textSize: 'text-xl', taglineSize: 'text-sm', mt: '4px', lineWidth: 'w-4' }
  };

  const config = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem */}
      <div className="shrink-0 transition-transform duration-200 hover:scale-110">
        <PhenrixPSEmblem size={config.icon} variant={variant} />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* PHENRIX Text */}
          <div className={`${config.textSize} font-extrabold tracking-widest`} style={{ color: primaryBlue, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Phenrix
          </div>

          {/* SOLUTIONS Subtitle with horizontal lines */}
          {showTagline && (
            <div className="flex items-center gap-1.5" style={{ marginTop: config.mt }}>
              <span className={`h-px ${config.lineWidth} opacity-60`} style={{ backgroundColor: secondaryBlue }} />
              <span className={`${config.taglineSize} font-bold uppercase`} style={{ color: secondaryBlue, letterSpacing: '0.25em', lineHeight: '1' }}>
                Solutions
              </span>
              <span className={`h-px ${config.lineWidth} opacity-60`} style={{ backgroundColor: secondaryBlue }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Aliases for compatibility
export const PhenrixEmblem = PhenrixPSEmblem;
