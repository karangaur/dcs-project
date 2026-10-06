import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SalonContactInfo } from '../types/salon';

interface MobileBottomBarProps {
  contactInfo: SalonContactInfo;
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ contactInfo, onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl h-16">
      {/* Call Button */}
      <a
        href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
        className="flex-1 h-11 rounded-xl bg-[#1A1A1A] border border-neutral-750 text-neutral-200 flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-95 transition-transform"
        aria-label="Call Delhi Celebrity Salon"
      >
        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Delhi%20Celebrity%20Salon%20Maharajganj!%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-95 transition-transform"
        aria-label="WhatsApp Delhi Celebrity Salon"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Appointment CTA Button */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.6] h-11 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-xs shadow-lg flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
