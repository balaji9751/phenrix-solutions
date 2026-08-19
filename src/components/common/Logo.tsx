import React from 'react';
import logoPhenrixPng from '@/assets/logo-phenrix.png';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showText?: boolean;
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical' | 'mark-only';
}

/**
 * Phenrix Logo Emblem loading from the background-removed png asset.
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
  return (
    <img
      src={logoPhenrixPng}
      alt="Phenrix Monogram"
      className={`shrink-0 transition-all duration-300 hover:scale-105 object-contain ${className}`}
      style={{ 
        width: size, 
        height: size
      }}
    />
  );
};

/**
 * Wordmark styled in precise colors.
 */
export const PhenrixWordmark: React.FC<{
  className?: string;
  variant?: 'light' | 'dark';
}> = ({
  className = "h-7",
  variant = 'dark'
}) => {
  const isDarkLogo = variant === 'dark';
  const textColor = isDarkLogo ? "#0A2540" : "#ffffff";
  const secondaryColor = isDarkLogo ? "#007DFF" : "#60a5fa";

  return (
    <div className={`flex flex-col select-none ${className}`} style={{ fontSize: 'inherit' }}>
      <span style={{ color: textColor, fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: '1' }}>
        Phenrix
      </span>
      <div className="flex items-center gap-1.5 mt-1">
        <span className="h-px w-2.5 opacity-60" style={{ backgroundColor: secondaryColor }} />
        <span style={{ color: secondaryColor, fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.52em', lineHeight: '1' }}>
          Solutions
        </span>
        <span className="h-px w-2.5 opacity-60" style={{ backgroundColor: secondaryColor }} />
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
  const textColor = isDarkLogo ? "#0A2540" : "#ffffff";
  const secondaryColor = isDarkLogo ? "#007DFF" : "#38BDF8";

  const scaleMap = {
    sm: { emblemSize: 48, fontSize: 'text-sm', subtextSize: 'text-[8px]', spacing: '0.15em', subSpacing: '0.25em', lineWidth: 'w-2' },
    md: { emblemSize: 64, fontSize: 'text-base', subtextSize: 'text-[10px]', spacing: '0.2em', subSpacing: '0.3em', lineWidth: 'w-3' },
    lg: { emblemSize: 84, fontSize: 'text-lg', subtextSize: 'text-xs', spacing: '0.25em', subSpacing: '0.35em', lineWidth: 'w-4' }
  };

  const current = scaleMap[size];

  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Emblem */}
      <div className="mb-3">
        <PhenrixPSEmblem size={current.emblemSize} variant={variant} />
      </div>

      {/* "PHENRIX" Text */}
      <div className={`${current.fontSize} font-extrabold tracking-widest`} style={{ color: textColor, textTransform: 'uppercase', letterSpacing: current.spacing }}>
        Phenrix
      </div>

      {/* "— SOLUTIONS —" Subtitle */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5">
        <span className={`h-px ${current.lineWidth} opacity-60`} style={{ backgroundColor: secondaryColor }} />
        <span className={`${current.subtextSize} font-bold uppercase`} style={{ color: secondaryColor, letterSpacing: current.subSpacing, lineHeight: '1' }}>
          Solutions
        </span>
        <span className={`h-px ${current.lineWidth} opacity-60`} style={{ backgroundColor: secondaryColor }} />
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
  const textColor = isDarkLogo ? "#0A2540" : "#ffffff";
  const secondaryColor = isDarkLogo ? "#007DFF" : "#38BDF8";

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
          <div className={`${config.textSize} font-extrabold tracking-widest`} style={{ color: textColor, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Phenrix
          </div>

          {/* SOLUTIONS Subtitle with horizontal lines */}
          {showTagline && (
            <div className="flex items-center gap-1.5" style={{ marginTop: config.mt }}>
              <span className={`h-px ${config.lineWidth} opacity-60`} style={{ backgroundColor: secondaryColor }} />
              <span className={`${config.taglineSize} font-bold uppercase`} style={{ color: secondaryColor, letterSpacing: '0.25em', lineHeight: '1' }}>
                Solutions
              </span>
              <span className={`h-px ${config.lineWidth} opacity-60`} style={{ backgroundColor: secondaryColor }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Aliases for compatibility
export const PhenrixEmblem = PhenrixPSEmblem;
