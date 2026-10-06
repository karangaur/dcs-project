import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Sparkles } from 'lucide-react';
import { SalonContactInfo } from '../types/salon';
import { BrandName } from './BrandName';

interface FooterProps {
  contactInfo: SalonContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  return (
    <footer className="bg-[#050605] text-neutral-400 text-xs border-t border-[#D4AF37]/25 pb-24 sm:pb-12 pt-18 exotic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Maharajganj Location Identity */}
          <div className="space-y-4">
            <BrandName variant="footer" />
            <p className="text-neutral-400 text-xs leading-relaxed font-sans-clean font-light">
              Where Beauty Meets Celebrity Style. Maharajganj's premier sanctuary for luxury hair styling, precision cuts, HD bridal makeup, and clinical skin rejuvenation.
            </p>
            <div className="flex items-center gap-2 text-[#D4AF37] font-medium text-xs">
              <span className="text-[#E5C378]">⚜</span>
              <span>Maharajganj, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Explore Salon
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Home & Sanctuary</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Our Story</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#bridal" className="hover:text-white transition-colors">Bridal Packages</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Portfolio & Transformations</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Master Stylists</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5">
              <li>French Balayage & Global Color</li>
              <li>Keratin & Olaplex Reconstruction</li>
              <li>Grand Celebrity HD Bridal Makeup</li>
              <li>Engagement & Reception Glamour</li>
              <li>24K Gold Hydra Facials & Cleanup</li>
              <li>Rica Waxing & Crystal Spa Mani-Pedi</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Salon Contact
            </h4>
            <p className="text-neutral-300">
              <span className="text-neutral-500 block">Address:</span>
              {contactInfo.address}, {contactInfo.city}, Uttar Pradesh {contactInfo.pincode}
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500 block">Phone:</span>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-[#D4AF37] transition-colors">
                {contactInfo.phone}
              </a>
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500 block">Timings:</span>
              {contactInfo.openingHours}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Delhi Celebrity Salon · All Rights Reserved · Maharajganj, Uttar Pradesh · Desig & Developed by Karan
          </p>
          <div className="flex items-center gap-6">
            <span>Local Luxury Beauty Salon in Maharajganj, UP</span>
            <span>Privacy & Client Safety Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
