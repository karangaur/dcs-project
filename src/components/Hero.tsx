import React from 'react';
import { MapPin, Sparkles, ArrowRight, Calendar, Star, ShieldCheck, Flame, Compass } from 'lucide-react';
import { SalonImage } from './SalonImage';
import { BrandName } from './BrandName';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#060706] overflow-hidden pt-28 sm:pt-36 pb-20 exotic-pattern-bg">
      {/* Background Image with Cinematic Scrim & Exotic Amber Lighting */}
      <div className="absolute inset-0 z-0">
        <SalonImage
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
          alt="Delhi Celebrity Salon luxury ambiance in Maharajganj, Uttar Pradesh"
          className="w-full h-full object-cover scale-105 filter brightness-[0.32] contrast-110 saturate-90"
        />
        {/* Deep Exotic Royal Obsidian Scrim with Warm Amber Core */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-[#070908]/85 to-[#060706]/55" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/18 via-[#C59942]/08 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(24,40,32,0.35)_0%,_transparent_70%)] blur-2xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-8">
        {/* Brand Royal Insignia & Maharajganj Trust Marker */}
        <div className="mb-7 inline-flex flex-col items-center">
          <BrandName variant="hero" className="mb-6 scale-95 sm:scale-105 transition-transform" />
          
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121411]/90 border border-[#D4AF37]/50 backdrop-blur-md text-xs font-semibold text-[#D4AF37] shadow-xl">
              <span className="text-[#E5C378]">⚜</span>
              <span className="font-marcellus tracking-wider">Maharajganj Royal Sanctuary · Uttar Pradesh</span>
            </div>
            <div className="hidden sm:block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </div>

        {/* Hero Headline with Exotic Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-medium text-white tracking-tight leading-[1.08] max-w-5xl mx-auto drop-shadow-2xl">
          “Where Beauty Meets <span className="font-italiana italic gold-gradient-text">Celebrity Style</span>”
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#FAF6EE]/90 max-w-2xl mx-auto font-sans-clean font-light leading-relaxed drop-shadow">
          Experience premium hair, beauty, makeup, and bridal services in Maharajganj, Uttar Pradesh.
        </p>

        {/* Exotic Sensory Cue Badge */}
        <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80 font-medium">
          <span>Oud & Damask Rose Ambiance</span>
          <span>·</span>
          <span>Private Vanity Suites</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black font-semibold text-sm shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span className="font-medium tracking-wide">Book an Appointment</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-[#111311]/80 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#FAF6EE] font-medium text-sm backdrop-blur-md transition-all hover:bg-[#181A16] flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Quiet Trust Bar with Exotic Glass Panels */}
        <div className="mt-16 pt-8 border-t border-neutral-800/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-3.5 rounded-xl exotic-glass exotic-glass-hover transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1813] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Star className="w-4 h-4 fill-[#D4AF37]" />
            </div>
            <div>
              <span className="text-sm font-serif-luxury font-semibold text-white block">5.0 Star Rated</span>
              <span className="text-[10px] text-neutral-400">Maharajganj Patrons</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl exotic-glass exotic-glass-hover transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1813] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-serif-luxury font-semibold text-white block">Airbrush & HD</span>
              <span className="text-[10px] text-neutral-400">Celebrity Bridal Glow</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl exotic-glass exotic-glass-hover transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1813] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-serif-luxury font-semibold text-white block">100% Genuine</span>
              <span className="text-[10px] text-neutral-400">L'Oréal & Olaplex Care</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl exotic-glass exotic-glass-hover transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1813] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-serif-luxury font-semibold text-white block">Prime Location</span>
              <span className="text-[10px] text-neutral-400">Main Market, Maharajganj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

