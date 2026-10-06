import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  categoryHint?: string;
}

export const SalonImage: React.FC<SalonImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  categoryHint
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#141414] ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#141414] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin" />
        </div>
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1E1C18] via-[#141414] to-[#0A0A0A] border border-[#D4AF37]/20">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/10 mb-3 text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-1">
            {categoryHint || "Delhi Celebrity Salon"}
          </span>
          <span className="text-sm font-serif-luxury text-[#FAF6EE] max-w-[200px] truncate">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
