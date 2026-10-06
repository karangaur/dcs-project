import React from 'react';
import { MapPin, Sparkles, ArrowRight, Calendar, Star, ShieldCheck } from 'lucide-react';
import { SalonImage } from './SalonImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#0D0D0D] overflow-hidden pt-20 pb-16">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <SalonImage
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
          alt="Delhi Celebrity Salon luxury ambiance in Maharajganj, Uttar Pradesh"
          className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-105"
        />
        {/* Gradients to guarantee WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-12">
        {/* Distinctive Location Trust Marker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1815]/90 border border-[#D4AF37]/50 backdrop-blur-md text-xs font-semibold text-[#D4AF37] mb-6 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span className="tracking-wide">📍 Maharajganj, Uttar Pradesh</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-medium text-white tracking-tight leading-[1.08] max-w-5xl mx-auto drop-shadow-md">
          “Where Beauty Meets <span className="gold-gradient-text italic">Celebrity Style</span>”
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#FAF6EE]/90 max-w-2xl mx-auto font-sans-clean font-normal leading-relaxed drop-shadow">
          Experience premium hair, beauty, makeup, and bridal services in Maharajganj, Uttar Pradesh.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-sm shadow-xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-black/60 border border-neutral-700 hover:border-[#D4AF37] text-[#FAF6EE] font-medium text-sm backdrop-blur-md transition-all hover:bg-black/80 flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Star className="w-5 h-5 fill-[#D4AF37]" />
            </div>
            <div>
              <span className="text-base font-serif-luxury font-semibold text-white block">5.0 Star Rated</span>
              <span className="text-[11px] text-neutral-400">By Maharajganj Clients</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-serif-luxury font-semibold text-white block">Airbrush & HD</span>
              <span className="text-[11px] text-neutral-400">Celebrity Bridal Artistry</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-serif-luxury font-semibold text-white block">100% Genuine</span>
              <span className="text-[11px] text-neutral-400">L'Oréal & Olaplex Care</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-serif-luxury font-semibold text-white block">Central Location</span>
              <span className="text-[11px] text-neutral-400">Main Market, Maharajganj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
