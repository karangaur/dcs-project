import React from 'react';
import { Sparkles, Crown, Heart, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { SalonImage } from './SalonImage';

interface BridalSpotlightProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = ({ onOpenBooking }) => {
  return (
    <section id="bridal" className="py-24 bg-gradient-to-b from-[#0D0D0D] via-[#12110F] to-[#0A0A0A] text-[#FAF6EE] relative overflow-hidden border-t border-neutral-900">
      {/* Subtle luxury glow effect */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bridal Editorial Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#221C11] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37]">
              <Crown className="w-3.5 h-3.5" />
              <span>Bespoke Bridal Couture · Maharajganj</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-white leading-tight">
              “Your Big Day Deserves a Celebrity Look.”
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans-clean">
              From bridal makeup to elegant hairstyling, create your perfect wedding-day look with Delhi Celebrity Salon.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Serving royal brides in Maharajganj, Uttar Pradesh with high-definition airbrush artistry, customized jewellery draping, and flawless photographic endurance designed for 12+ hour celebrations.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "High-Definition & Airbrush Waterproof Base (Tear & Sweat Proof)",
                "Customized Dupatta & Royal Jewellery Draping Expertise",
                "Private Air-Conditioned Luxury Bridal Vanity Suite in Maharajganj",
                "On-Venue Styling Team Available Across Maharajganj District"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenBooking('bridal-packages')}
                className="py-3 px-6 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book Bridal Consultation
              </button>
              <a
                href="#services"
                className="py-3 px-6 bg-neutral-900 border border-neutral-700 text-neutral-300 font-medium text-xs sm:text-sm rounded-xl hover:text-white hover:border-[#D4AF37] transition-all text-center"
              >
                Explore Bridal Services
              </a>
            </div>
          </div>

          {/* Bridal Visual Anchor */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl shadow-black">
              <SalonImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Celebrity Indian Bridal Makeup at Delhi Celebrity Salon Maharajganj"
                className="w-full h-full object-cover"
                categoryHint="Bridal Artistry"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 text-xs">
                <p className="text-white font-medium font-serif-luxury text-base">
                  Authentic Celebrity Royal Glam
                </p>
                <p className="text-neutral-300 text-[11px] mt-0.5">
                  Artisanal hair styling, HD base and jewellery pinning by our Maharajganj bridal wing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Bridal Packages Grid */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Signature Wedding Collections
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
              Select Your Wedding Day Package
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Pre-Wedding Glam
                </span>
                <h4 className="text-xl font-serif-luxury text-white mt-1">
                  Royal Engagement & Roka
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-2xl font-serif-luxury text-[#D4AF37] font-semibold">₹4,999</span>
                  <span className="text-xs text-neutral-400"> / session</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">✓ Luminous Glass Skin Base</li>
                  <li className="flex items-center gap-2">✓ Designer Shimmer Eye Artistry</li>
                  <li className="flex items-center gap-2">✓ Modern Textured Curls or Hairdo</li>
                  <li className="flex items-center gap-2">✓ Premium Eyelash Extension Pair</li>
                  <li className="flex items-center gap-2">✓ Saree / Lehenga Pinning</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('engagement-makeup')}
                className="mt-8 w-full py-2.5 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-200 hover:bg-[#D4AF37] hover:text-black transition-colors"
              >
                Reserve Engagement Look
              </button>
            </div>

            {/* Package 2: Spotlight */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1C1812] to-[#141414] border-2 border-[#D4AF37] shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                Most Requested in Maharajganj
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  The Crown Jewel
                </span>
                <h4 className="text-xl font-serif-luxury text-white mt-1">
                  The Imperial Celebrity Bride
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-2xl font-serif-luxury text-[#D4AF37] font-semibold">₹15,999</span>
                  <span className="text-xs text-neutral-400"> / complete package</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-200 font-medium">
                  <li className="flex items-center gap-2">★ 3-Day Pre-Bridal Glow Rituals</li>
                  <li className="flex items-center gap-2">★ Ultra HD or Airbrush Base Application</li>
                  <li className="flex items-center gap-2">★ Regal Bridal Bun with Fresh Florals</li>
                  <li className="flex items-center gap-2">★ Complete Matha Patti & Jewellery Styling</li>
                  <li className="flex items-center gap-2">★ Double Dupatta Draping & Setting</li>
                  <li className="flex items-center gap-2">★ Pre-Wedding Makeup Trial Consultation</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('bridal-packages')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-semibold bg-[#D4AF37] text-black hover:brightness-110 shadow-lg transition-all"
              >
                Reserve Celebrity Bride Package
              </button>
            </div>

            {/* Package 3 */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Evening Elegance
                </span>
                <h4 className="text-xl font-serif-luxury text-white mt-1">
                  Red Carpet Reception
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-2xl font-serif-luxury text-[#D4AF37] font-semibold">₹5,999</span>
                  <span className="text-xs text-neutral-400"> / session</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">✓ High-Drama Contour & Glow</li>
                  <li className="flex items-center gap-2">✓ Smokey Glamour Eye Makeup</li>
                  <li className="flex items-center gap-2">✓ Hollywood Waves or Chic Updo</li>
                  <li className="flex items-center gap-2">✓ Long-Wear Waterproof Setting</li>
                  <li className="flex items-center gap-2">✓ Gown & Jewelry Coordination</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('reception-makeup')}
                className="mt-8 w-full py-2.5 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-200 hover:bg-[#D4AF37] hover:text-black transition-colors"
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
