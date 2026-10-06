import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { clientTestimonials } from '../data/salonData';
import { SalonImage } from './SalonImage';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Acclaim</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Loved by Maharajganj Patrons
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            Read real stories from brides, professionals, and families across Maharajganj who trust Delhi Celebrity Salon for their most special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#141414] border border-neutral-850 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans-clean italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37]/30 bg-neutral-800 shrink-0">
                    <SalonImage
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-serif-luxury">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-neutral-400 block">
                      📍 {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
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
