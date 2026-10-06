import React from 'react';
import { Sparkles, Calendar, Phone, MessageSquare } from 'lucide-react';
import { SalonContactInfo } from '../types/salon';
import { BrandName } from './BrandName';

interface FinalCtaProps {
  contactInfo: SalonContactInfo;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ contactInfo, onOpenBooking }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#14120E] to-[#0D0D0D] text-[#FAF6EE] relative overflow-hidden border-t border-neutral-900">
      {/* Luxury gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="flex flex-col items-center">
          <BrandName variant="navbar" className="mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1B12] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>📍 Maharajganj, Uttar Pradesh</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium text-white tracking-tight leading-tight">
          Ready for Your Transformation?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-sans-clean leading-relaxed">
          Step into Delhi Celebrity Salon and experience premium beauty and styling in Maharajganj.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-sm shadow-xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>

          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-[#1A1A1A] border border-neutral-700 hover:border-[#D4AF37] text-white font-medium text-sm transition-all hover:bg-neutral-800 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Delhi%20Celebrity%20Salon%20Maharajganj!%20I%20would%20like%20to%20book%20a%20celebrity%20transformation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[#25D366] font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="pt-4 text-xs text-neutral-500 font-sans-clean">
          Delhi Celebrity Salon · Near Nagar Palika Parishad, Maharajganj, UP 273303
        </p>
      </div>
    </section>
  );
};
