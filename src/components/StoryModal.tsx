import React from 'react';
import { X, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import { SalonImage } from './SalonImage';
import { BrandName } from './BrandName';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#121212] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 md:p-10 text-[#FAF6EE] my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 flex flex-col items-center">
          <BrandName variant="hero" className="scale-90 mb-3" />
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
            Our Heritage & Philosophy · Maharajganj, UP
          </span>
          <p className="text-sm text-[#D4AF37] italic mt-1 font-serif-luxury">
            “Beauty Is Personal. We Make It Extraordinary.”
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans-clean">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/20">
              <SalonImage
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Delhi Celebrity Salon luxury interior in Maharajganj"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-serif-luxury text-white font-medium">
                Bringing Metropolitan Glamour to Maharajganj
              </h3>
              <p>
                Founded with a bold vision to eliminate the need for travel to metro cities for luxury hair and bridal transformations, <strong>Delhi Celebrity Salon</strong> opened its flagship doors in <strong>Maharajganj, Uttar Pradesh</strong>.
              </p>
              <p>
                Our brand name embodies the pinnacle of Indian celebrity red-carpet couture, while our roots and heart remain devoted to serving the vibrant families of Maharajganj and surrounding communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-neutral-800/80">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-2.5">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">Master-Trained Talent</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Our lead stylists and bridal artists possess extensive certifications in French balayage, HD makeup, and precision styling.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-neutral-800/80">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-2.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">Gold Standard Hygiene</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Sterilized tools, single-use disposables, and private sanitized bridal vanity suites ensure supreme safety and comfort.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-neutral-800/80">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-2.5">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">100% Genuine Luxury Products</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Only authentic formulations from L'Oréal Professionnel, Kérastase, Olaplex, M.A.C, and Kryolan. No cheap substitutes ever.
              </p>
            </div>
          </div>

          <p className="pt-2 text-xs text-neutral-400 italic text-center">
            Conveniently situated in Maharajganj, Uttar Pradesh — your sanctuary for bespoke transformations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="py-3 px-6 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-sm rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Experience the Salon — Book Now
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 bg-neutral-800 text-neutral-300 font-medium text-sm rounded-xl hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
