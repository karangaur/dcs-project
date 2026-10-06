import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MessageSquare } from 'lucide-react';
import { SalonContactInfo } from '../types/salon';
import { BrandName } from './BrandName';

interface NavbarProps {
  contactInfo: SalonContactInfo;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ contactInfo, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060706]/92 backdrop-blur-xl border-b border-[#D4AF37]/30 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Luxury Styled Brand Name Wordmark */}
          <a
            href="#"
            className="flex items-center text-white transition-opacity hover:opacity-95"
            aria-label="Delhi Celebrity Salon - Home"
          >
            <BrandName variant="navbar" />
          </a>

          {/* Zone 2: Clean Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors tracking-widest uppercase text-[11px] font-sans-clean hover:underline underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex py-2.5 px-5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black shadow-[0_2px_18px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-95 transition-all items-center gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#D4AF37] text-black flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="py-2 px-3 rounded-lg bg-neutral-800 text-neutral-200 text-xs text-center font-medium flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs text-center font-medium flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
