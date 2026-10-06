import React from 'react';

interface BrandNameProps {
  variant?: 'navbar' | 'stacked' | 'inline' | 'hero' | 'footer';
  className?: string;
  showCrest?: boolean;
}

export const BrandCrest: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="25%" stopColor="#F5E5C8" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9C7718" />
          </linearGradient>
          <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C7718" />
            <stop offset="50%" stopColor="#EED48F" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* Outer Fine Hexagonal / Octagonal Star Halo */}
        <circle cx="50" cy="50" r="47" stroke="url(#goldRing)" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        
        {/* Main Shield / Medallion Rim */}
        <circle cx="50" cy="50" r="44" stroke="url(#goldGradient)" strokeWidth="1.8" />
        <circle cx="50" cy="50" r="40" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.7" />

        {/* Top Royal Diamond / Star Apex */}
        <path
          d="M50 8 L52.5 14 L50 20 L47.5 14 Z"
          fill="url(#goldGradient)"
        />
        <circle cx="50" cy="14" r="1.5" fill="#FFFDF8" />

        {/* Stylized Interlocking Monogram: DCS */}
        {/* Letter D */}
        <path
          d="M32 30 H44 C53 30 58 37 58 50 C58 63 53 70 44 70 H32 V30 Z M37 36 V64 H44 C49.5 64 53 59 53 50 C53 41 49.5 36 44 36 H37 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />

        {/* Letter C (Slightly offset & interwoven) */}
        <path
          d="M66 38 C63 33 58 31 52 31 C42 31 36 39 36 50 C36 61 42 69 52 69 C58 69 63 67 66 62 L62 58 C60 62 56 64 52 64 C45 64 41 58 41 50 C41 42 45 36 52 36 C56 36 60 38 62 42 L66 38 Z"
          fill="url(#goldGradient)"
          opacity="0.95"
        />

        {/* Central Crown Flurry & Bottom Laurel Accent */}
        <path
          d="M36 78 Q50 84 64 78"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="50" cy="81.5" r="1.2" fill="url(#goldGradient)" />
      </svg>
    </div>
  );
};

export const BrandName: React.FC<BrandNameProps> = ({
  variant = 'navbar',
  className = '',
  showCrest = true,
}) => {
  if (variant === 'navbar') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 group cursor-pointer ${className}`}>
        {showCrest && (
          <BrandCrest 
            size={36} 
            className="group-hover:scale-105 transition-transform duration-300 sm:w-10 sm:h-10" 
          />
        )}
        <div className="flex flex-col text-left leading-none">
          {/* Top Sub-line: DELHI */}
          <div className="flex items-center gap-1.5">
            <span className="font-cinzel text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#E8E2D5] uppercase group-hover:text-white transition-colors">
              DELHI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 inline-block" />
          </div>

          {/* Main Line: CELEBRITY SALON */}
          <div className="flex items-center gap-1 mt-0.5">
            <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-[0.06em] gold-gradient-text drop-shadow-[0_1px_8px_rgba(212,175,55,0.2)]">
              CELEBRITY
            </span>
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#FAF6EE]/80 uppercase ml-1 group-hover:text-[#D4AF37] transition-colors">
              SALON
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero' || variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center group ${className}`}>
        {showCrest && (
          <div className="mb-3 relative">
            <BrandCrest size={54} className="sm:w-16 sm:h-16 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl pointer-events-none" />
          </div>
        )}

        <div className="flex items-center justify-center gap-3 w-full max-w-[260px]">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#FAF6EE] uppercase">
            DELHI
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.08em] gold-gradient-text mt-1.5 drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
          CELEBRITY
        </h2>

        <div className="flex items-center justify-center gap-3 w-full max-w-[220px] mt-1">
          <div className="h-[1px] w-6 bg-[#D4AF37]/40" />
          <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#E5C378] uppercase">
            SALON
          </span>
          <div className="h-[1px] w-6 bg-[#D4AF37]/40" />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-3 group ${className}`}>
        {showCrest && <BrandCrest size={38} className="sm:w-11 sm:h-11" />}
        <div className="flex flex-col leading-none">
          <span className="font-cinzel text-[11px] font-medium tracking-[0.26em] text-neutral-300 uppercase">
            DELHI
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.06em] gold-gradient-text">
              CELEBRITY
            </span>
            <span className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#FAF6EE]/80 uppercase">
              SALON
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback: inline refined styling
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-cinzel ${className}`}>
      <span className="text-white/90 font-medium tracking-[0.14em]">DELHI</span>
      <span className="gold-gradient-text font-bold tracking-[0.06em]">CELEBRITY</span>
      <span className="text-[#FAF6EE]/80 font-semibold tracking-[0.18em] text-[0.85em]">SALON</span>
    </span>
  );
};
