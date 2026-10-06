import React from 'react';
import { Sparkles, Crown, Heart, CheckCircle2, Calendar, ArrowRight, Gem } from 'lucide-react';
import { SalonImage } from './SalonImage';

interface BridalSpotlightProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = ({ onOpenBooking }) => {
  return (
    <section id="bridal" className="py-28 bg-gradient-to-b from-[#060706] via-[#0D100D] to-[#060706] text-[#FAF6EE] relative overflow-hidden border-t border-[#D4AF37]/20 exotic-pattern-bg">
      {/* Exotic warm candlelight and royal emerald ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(18,36,26,0.35)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bridal Editorial Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/50 rounded-full text-xs font-semibold text-[#D4AF37] shadow-lg">
              <Crown className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="font-marcellus tracking-wider">Sheesh Mahal Royal Bridal Wing · Maharajganj</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-white leading-tight">
              “Your Big Day Deserves a <span className="font-italiana italic gold-gradient-text">Celebrity Look</span>.”
            </h2>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans-clean font-light">
              From bridal makeup to elegant hairstyling, create your perfect wedding-day look with Delhi Celebrity Salon.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Serving royal brides in Maharajganj, Uttar Pradesh with high-definition airbrush artistry, customized jewellery draping, and flawless photographic endurance designed for 12+ hour celebrations.
            </p>

            {/* Exotic Bridal Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "High-Definition & 24K Gold Airbrush Waterproof Base (Tear & Sweat Proof)",
                "Antique Polki, Kundan & Matha Patti Setting with Couture Dupatta Pinning",
                "Private Air-Conditioned Royal Bridal Vanity Suite in Maharajganj",
                "On-Venue Master Styling Troupe Available Across Maharajganj District"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-[#D4AF37]">✦</span>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenBooking('bridal-packages')}
                className="py-3.5 px-7 bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black font-semibold text-xs sm:text-sm rounded-xl shadow-[0_4px_25px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Royal Bridal Consultation</span>
              </button>
              <a
                href="#services"
                className="py-3.5 px-6 bg-[#111311]/90 border border-[#D4AF37]/40 text-neutral-200 font-medium text-xs sm:text-sm rounded-xl hover:text-white hover:border-[#D4AF37] transition-all text-center"
              >
                Explore Bridal Services
              </a>
            </div>
          </div>

          {/* Bridal Visual Anchor: Palace Arch Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-t-[5rem] rounded-b-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <SalonImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Celebrity Indian Bridal Makeup at Delhi Celebrity Salon Maharajganj"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                categoryHint="Bridal Artistry"
              />
              {/* Exotic Arch Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-transparent to-transparent opacity-90" />
              
              {/* Ornamental Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl exotic-glass border border-[#D4AF37]/40 shadow-2xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    The Maharajganj Royal Bride
                  </span>
                  <Gem className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <p className="text-white font-serif-luxury text-lg font-medium">
                  Couture Airbrush & Regal Dupatta Draping
                </p>
                <p className="text-neutral-300 text-xs mt-0.5 font-light">
                  Crafted exclusively by lead artists at Delhi Celebrity Salon in Maharajganj, UP.
                </p>
              </div>
            </div>

            {/* Subtle ornamental gold corner accents */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-3xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-3xl pointer-events-none" />
          </div>
        </div>

        {/* Curated Bridal Packages Grid with Exotic Styling */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Palace Collections · Maharajganj
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif-luxury text-white mt-1">
              Select Your Wedding Day Package
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
              Transparent, all-inclusive luxury bridal pricing crafted for traditional, modern, and royal wedding celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="p-8 rounded-3xl bg-[#0E100E] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between exotic-glass-hover">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <span>✦</span> Pre-Wedding Glam
                </span>
                <h4 className="text-2xl font-serif-luxury text-white mt-2">
                  Royal Engagement & Roka
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif-luxury text-[#D4AF37] font-semibold">₹4,999</span>
                  <span className="text-xs text-neutral-400"> / bespoke session</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">✓ Luminous 24K Glass Skin Base</li>
                  <li className="flex items-center gap-2">✓ Custom Shimmer Champagne Eye Artistry</li>
                  <li className="flex items-center gap-2">✓ Modern Textured Curls or Hairdo</li>
                  <li className="flex items-center gap-2">✓ Premium 3D Silk Lashes</li>
                  <li className="flex items-center gap-2">✓ Saree / Lehenga Pinning & Draping</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('engagement-makeup')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-semibold bg-[#181A16] border border-neutral-700 text-neutral-200 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all"
              >
                Reserve Engagement Look
              </button>
            </div>

            {/* Package 2: Spotlight (Imperial Celebrity Bride) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#181A14] via-[#121410] to-[#0D0F0D] border-2 border-[#D4AF37] shadow-[0_10px_40px_rgba(212,175,55,0.18)] relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                Most Requested by Maharajganj Brides
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" /> The Crown Jewel
                </span>
                <h4 className="text-2xl font-serif-luxury text-white mt-2">
                  The Imperial Celebrity Bride
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif-luxury text-[#D4AF37] font-semibold">₹15,999</span>
                  <span className="text-xs text-neutral-400"> / complete grand package</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-200 font-medium">
                  <li className="flex items-center gap-2">★ 3-Day Pre-Bridal Glow Rituals with Gold Polish</li>
                  <li className="flex items-center gap-2">★ Ultra HD or Airbrush Base (Tear & Sweat Proof)</li>
                  <li className="flex items-center gap-2">★ Regal Bridal Bun with Fresh Jasmine & Florals</li>
                  <li className="flex items-center gap-2">★ Complete Matha Patti & Royal Jewellery Styling</li>
                  <li className="flex items-center gap-2">★ Double Dupatta Draping with Couture Pinning</li>
                  <li className="flex items-center gap-2">★ Complimentary Pre-Wedding Consultation & Trial</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('bridal-packages')}
                className="mt-8 w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black hover:brightness-110 shadow-xl transition-all"
              >
                Reserve Celebrity Bride Package
              </button>
            </div>

            {/* Package 3 */}
            <div className="p-8 rounded-3xl bg-[#0E100E] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between exotic-glass-hover">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <span>✦</span> Evening Elegance
                </span>
                <h4 className="text-2xl font-serif-luxury text-white mt-2">
                  Red Carpet Reception
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif-luxury text-[#D4AF37] font-semibold">₹5,999</span>
                  <span className="text-xs text-neutral-400"> / grand banquet session</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">✓ High-Drama Sculpted Contour & Lit Base</li>
                  <li className="flex items-center gap-2">✓ Exotic Smokey Bronze / Gold Eye Glamour</li>
                  <li className="flex items-center gap-2">✓ Hollywood Glam Waves or Contemporary Bun</li>
                  <li className="flex items-center gap-2">✓ 16-Hour Photographic Waterproof Setting</li>
                  <li className="flex items-center gap-2">✓ Gown, Veil & Jewelry Precision Pinning</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('reception-makeup')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-semibold bg-[#181A16] border border-neutral-700 text-neutral-200 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all"
              >
                Reserve Reception Look
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
