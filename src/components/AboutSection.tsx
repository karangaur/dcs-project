import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { SalonImage } from './SalonImage';
import { BrandName } from './BrandName';

interface AboutSectionProps {
  onOpenStory: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenStory, onOpenBooking }) => {
  return (
    <section id="about" className="py-28 bg-[#060706] text-[#FAF6EE] relative border-t border-[#D4AF37]/20 exotic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery & Floating Stat */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-t-[5rem] rounded-b-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <SalonImage
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Delhi Celebrity Salon luxury styling chairs in Maharajganj, Uttar Pradesh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                categoryHint="Salon Sanctuary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-transparent to-black/20" />

              {/* Verified Trust Marker */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl exotic-glass border border-[#D4AF37]/40 flex items-center justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                    Maharajganj's Royal Sanctuary
                  </span>
                  <p className="text-white font-serif-luxury text-base font-medium mt-0.5">
                    Celebrity Craftsmanship & Care
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold gold-gradient-text font-serif-luxury block">4,500+</span>
                  <span className="text-[10px] text-neutral-400">Honored Patrons</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold frame accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-[3rem] pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-3xl pointer-events-none" />
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37]">
              <span className="text-[#E5C378]">⚜</span>
              <span className="font-marcellus tracking-wider">The Sanctuary Philosophy · Maharajganj</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-white leading-tight">
              “Beauty Is Personal. We Make It <span className="font-italiana italic gold-gradient-text">Extraordinary</span>.”
            </h2>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans-clean font-light">
              Located in the heart of <strong>Maharajganj, Uttar Pradesh</strong>, <BrandName variant="inline" className="text-sm sm:text-base" /> introduces an elevated realm of personal styling, where contemporary metropolitan aesthetics blend seamlessly with warm, attentive hospitality.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans-clean">
              We specialize in custom hair styling, advanced hair treatments, celebrity party and bridal makeup, restorative clinical skin therapies, and tailored grooming. Every consultation begins with understanding your unique lifestyle, facial balance, and aesthetic desires.
            </p>

            {/* Core Offerings List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Editorial Hair Styling & Precision Cuts",
                "French Balayage & Keratin Bond Repair",
                "24K Gold & Saffron Facials",
                "Grand Bridal Airbrush & Draping",
                "Clinical Skin & De-Tan Peels",
                "Rica Italian Waxing & Spa Mani-Pedi",
                "Bespoke One-on-One Consultations",
                "Private Sanitized VIP Suites"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-[#D4AF37]">✦</span>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onOpenStory}
                className="py-3.5 px-7 bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black font-semibold text-xs sm:text-sm rounded-xl shadow-[0_4px_25px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 bg-[#111311]/90 border border-[#D4AF37]/40 text-neutral-200 font-medium text-xs sm:text-sm rounded-xl hover:border-[#D4AF37] hover:text-white transition-all text-center"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
