import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { clientTestimonials } from '../data/salonData';
import { SalonImage } from './SalonImage';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#080908] text-[#FAF6EE] relative border-t border-[#D4AF37]/20 exotic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37] mb-4 shadow-lg">
            <span className="text-[#E5C378]">⚜</span>
            <span className="font-marcellus tracking-wider">Patron Acclaim · Maharajganj</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Loved by Maharajganj <span className="font-italiana italic gold-gradient-text">Patrons</span>
          </h2>
          <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            Read real stories from brides, professionals, and families across Maharajganj who trust Delhi Celebrity Salon for their most special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#0D0F0D] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between relative group exotic-glass-hover shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-9 h-9 text-neutral-800 group-hover:text-[#D4AF37]/30 transition-colors pointer-events-none" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1.5 mb-4 text-[#D4AF37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans-clean italic font-light">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/40 bg-neutral-800 shrink-0 shadow-md">
                    <SalonImage
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white font-serif-luxury">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-[#D4AF37] block mt-0.5">
                      📍 {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
