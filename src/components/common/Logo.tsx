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
 * Exact Vector "PS" Gradient Monogram Emblem for Phenrix Solutions
 * Faithful recreation of the uploaded brand asset:
 * - Geometric "P" in cyan-to-blue gradient
 * - Geometric "S" in royal-blue-to-purple-indigo gradient
 * - Soft ambient glow effect
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
  const isLight = variant === 'light';

  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      width={size * 1.3}
      height={size}
      aria-label="Phenrix PS Monogram"
    >
      <defs>
        {/* P Gradient: Electric Cyan (#00C5E5) -> Vibrant Royal Blue (#2979FF) */}
        <linearGradient id="ps-p-gradient" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#00C5E5" />
          <stop offset="50%" stopColor="#0091FF" />
          <stop offset="100%" stopColor="#2979FF" />
        </linearGradient>

        {/* S Gradient: Royal Blue (#2979FF) -> Indigo / Electric Violet (#6366F1 / #7C3AED) */}
        <linearGradient id="ps-s-gradient" x1="15%" y1="15%" x2="95%" y2="95%">
          <stop offset="0%" stopColor="#2979FF" />
          <stop offset="55%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Soft Ambient Radial Glow */}
        <filter id="ps-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3B82F6" floodOpacity={isLight ? "0.35" : "0.22"} />
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7C3AED" floodOpacity={isLight ? "0.3" : "0.18"} />
        </filter>
      </defs>

      <g filter="url(#ps-glow)">
        {/* --- GEOMETRIC 'P' --- */}
        <path
          d="M20 18 H52 C68 18 78 28 78 44 C78 60 68 70 52 70 H38 V102 H20 V18 Z M38 35 V53 H50 C58 53 62 49 62 44 C62 39 58 35 50 35 H38 Z"
          fill="url(#ps-p-gradient)"
        />

        {/* --- GEOMETRIC 'S' --- */}
        <path
          d="M136 34 L122 38 C120 28 112 24 102 24 C90 24 82 30 82 39 C82 48 90 52 104 57 C122 63 138 70 138 88 C138 103 124 114 104 114 C84 114 70 103 68 86 L84 82 C86 93 94 98 104 98 C116 98 122 92 122 84 C122 75 114 71 98 65 C82 59 66 52 66 37 C66 21 80 10 102 10 C120 10 134 20 136 34 Z"
          fill="url(#ps-s-gradient)"
        />
      </g>
    </svg>
  );
};

/**
 * Exact Vector Futuristic Stencil Wordmark for "PHENRIX"
 * Matches the uploaded typography with gradient transition:
 * Cyan -> Royal Blue -> Indigo -> Violet
 */
export const PhenrixWordmark: React.FC<{
  className?: string;
  variant?: 'light' | 'dark';
}> = ({
  className = "h-7",
  variant = 'dark'
}) => {
  return (
    <svg
      viewBox="0 0 420 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Phenrix Text"
    >
      <defs>
        {/* Full Wordmark Continuous Flow Gradient */}
        <linearGradient id="phenrix-full-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C5E5" />    {/* P - Cyan */}
          <stop offset="20%" stopColor="#0091FF" />   {/* H - Sky Blue */}
          <stop offset="45%" stopColor="#2563EB" />   {/* E - Royal Blue */}
          <stop offset="65%" stopColor="#3B82F6" />   {/* N - Blue */}
          <stop offset="80%" stopColor="#4F46E5" />   {/* R - Indigo */}
          <stop offset="92%" stopColor="#6366F1" />   {/* I - Purple */}
          <stop offset="100%" stopColor="#7C3AED" />  {/* X - Violet */}
        </linearGradient>
      </defs>

      {/* --- LETTER P (Cyan Futuristic Hook) --- */}
      <path
        d="M10 6 H44 C53 6 59 12 59 21 C59 30 53 36 44 36 H24 V58 H10 V6 Z M24 18 V24 H42 C45 24 47 23 47 21 C47 19 45 18 42 18 H24 Z"
        fill="url(#phenrix-full-text-grad)"
      />

      {/* --- LETTER H (Geometric Blue) --- */}
      <path
        d="M72 6 H86 V26 H114 V6 H128 V58 H114 V38 H86 V58 H72 V6 Z"
        fill="url(#phenrix-full-text-grad)"
      />

      {/* --- LETTER E (3-Bar Futuristic Stencil) --- */}
      <rect x="142" y="6" width="46" height="12" rx="2" fill="url(#phenrix-full-text-grad)" />
      <rect x="142" y="26" width="38" height="12" rx="2" fill="url(#phenrix-full-text-grad)" />
      <rect x="142" y="46" width="46" height="12" rx="2" fill="url(#phenrix-full-text-grad)" />

      {/* --- LETTER N (Tech Sans N) --- */}
      <path
        d="M202 6 H216 L242 41 V6 H256 V58 H242 L216 23 V58 H202 V6 Z"
        fill="url(#phenrix-full-text-grad)"
      />

      {/* --- LETTER R (Futuristic Stencil R) --- */}
      <path
        d="M272 6 H304 C314 6 320 12 320 21 C320 28 316 33 308 35 L322 58 H306 L294 37 H286 V58 H272 V6 Z M286 17 V26 H302 C305 26 307 24 307 21.5 C307 19 305 17 302 17 H286 Z"
        fill="url(#phenrix-full-text-grad)"
      />

      {/* --- LETTER I (Clean Vertical Bar) --- */}
      <rect x="336" y="6" width="14" height="52" rx="1.5" fill="url(#phenrix-full-text-grad)" />

      {/* --- LETTER X (Futuristic Stencil X) --- */}
      <path
        d="M364 6 H380 L394 28 L408 6 H424 L402 32 L424 58 H408 L394 36 L380 58 H364 L386 32 L364 6 Z"
        fill="url(#phenrix-full-text-grad)"
      />
    </svg>
  );
};

/**
 * Complete Full Logo Display (Emblem + "PHENRIX" + "SOLUTIONS")
 * Faithful representation of the uploaded artwork layout
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
  const isLight = variant === 'light';

  const scaleMap = {
    sm: { emblemSize: 36, wordmarkH: 'h-5', subtextSize: 'text-[9px] tracking-[0.28em]' },
    md: { emblemSize: 48, wordmarkH: 'h-7', subtextSize: 'text-[11px] tracking-[0.32em]' },
    lg: { emblemSize: 64, wordmarkH: 'h-9', subtextSize: 'text-xs tracking-[0.36em]' }
  };

  const current = scaleMap[size];

  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Top PS Monogram Emblem */}
      <div className="mb-2">
        <PhenrixPSEmblem size={current.emblemSize} variant={variant} />
      </div>

      {/* Middle "PHENRIX" Tech Wordmark */}
      <div className="mb-1.5 w-full flex justify-center">
        <PhenrixWordmark className={`${current.wordmarkH} max-w-full`} variant={variant} />
      </div>

      {/* Bottom "SOLUTIONS" Wide Tracked Subtitle */}
      <span className={`${current.subtextSize} font-bold font-sans uppercase ${isLight ? 'text-slate-200' : 'text-[#0F172A]'} block leading-none`}>
        SOLUTIONS
      </span>
    </div>
  );
};

/**
 * Universal Brand Logo Component
 * Fits perfectly into Header Navigation, Footers, Modals, and Cards
 */
export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 'md',
  variant = 'dark',
  showText = true,
  showTagline = true,
  layout = 'horizontal'
}) => {
  const isLight = variant === 'light';

  if (layout === 'vertical') {
    return <PhenrixFullLogo size={size === 'lg' || size === 'xl' ? 'lg' : size === 'xs' || size === 'sm' ? 'sm' : 'md'} variant={variant} className={className} />;
  }

  if (layout === 'mark-only') {
    const markSizes = { xs: 26, sm: 32, md: 40, lg: 50, xl: 64 };
    return <PhenrixPSEmblem size={markSizes[size]} variant={variant} className={className} />;
  }

  // Horizontal Navbar & Card Layout
  const sizeMap = {
    xs: { icon: 28, wordmarkH: 'h-4', tagline: 'text-[8px] tracking-[0.24em]' },
    sm: { icon: 34, wordmarkH: 'h-5', tagline: 'text-[9px] tracking-[0.26em]' },
    md: { icon: 42, wordmarkH: 'h-6', tagline: 'text-[10px] tracking-[0.28em]' },
    lg: { icon: 54, wordmarkH: 'h-8', tagline: 'text-xs tracking-[0.32em]' },
    xl: { icon: 66, wordmarkH: 'h-10', tagline: 'text-sm tracking-[0.36em]' }
  };

  const config = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* PS Monogram Vector Emblem */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <PhenrixPSEmblem size={config.icon} variant={variant} />
      </div>

      {/* Brand Typography (Wordmark + Solutions) */}
      {showText && (
        <div className="flex flex-col justify-center">
          {/* PHENRIX Tech Vector Wordmark */}
          <div className="flex items-center">
            <PhenrixWordmark className={`${config.wordmarkH} w-auto`} variant={variant} />
          </div>

          {/* SOLUTIONS Subtitle */}
          {showTagline && (
            <span className={`${config.tagline} font-bold font-sans uppercase mt-1 leading-none ${isLight ? 'text-slate-300' : 'text-[#0F172A]'}`}>
              SOLUTIONS
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Aliases for compatibility
export const PhenrixEmblem = PhenrixPSEmblem;
