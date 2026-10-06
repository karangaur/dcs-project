import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { SalonImage } from './SalonImage';

interface AboutSectionProps {
  onOpenStory: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenStory, onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery & Floating Stat */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <SalonImage
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Delhi Celebrity Salon luxury styling chairs in Maharajganj, Uttar Pradesh"
                className="w-full h-full object-cover"
                categoryHint="Salon Sanctuary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Verified Trust Marker */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#141414]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Maharajganj's Luxury Sanctuary
                  </span>
                  <p className="text-white font-serif-luxury text-base font-medium mt-0.5">
                    Celebrity Craftsmanship & Care
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#D4AF37] font-serif-luxury block">4,500+</span>
                  <span className="text-[10px] text-neutral-400">Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold frame accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Delhi Celebrity Salon · Maharajganj</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-white leading-tight">
              “Beauty Is Personal. We Make It Extraordinary.”
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans-clean">
              Located in the heart of <strong>Maharajganj, Uttar Pradesh</strong>, <strong>Delhi Celebrity Salon</strong> introduces an elevated realm of personal styling, where contemporary metropolitan aesthetics blend seamlessly with warm, attentive hospitality.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans-clean">
              We specialize in custom hair styling, advanced hair treatments, celebrity party and bridal makeup, restorative clinical skin therapies, and tailored grooming. Every consultation begins with understanding your unique lifestyle, facial balance, and aesthetic desires.
            </p>

            {/* Core Offerings List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Hair Styling & Cuts",
                "Advanced Hair Treatments",
                "HD & Airbrush Makeup",
                "Grand Bridal Couture Makeup",
                "Clinical Facials & Skin Care",
                "Grooming & Manicure/Pedicure",
                "Personalized One-on-One Consultations",
                "Hospital-Grade Sterile Protocols"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onOpenStory}
                className="py-3 px-6 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="py-3 px-6 bg-[#141414] border border-neutral-700 text-neutral-200 font-medium text-xs sm:text-sm rounded-xl hover:border-[#D4AF37] hover:text-white transition-all text-center"
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
