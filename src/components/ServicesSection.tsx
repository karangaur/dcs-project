import React, { useState } from 'react';
import { Sparkles, Clock, Search, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types/salon';
import { salonServices } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState<'hair' | 'makeup' | 'skin' | 'bridal'>('hair');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = salonServices.filter((service) => {
    const matchesTab = service.category === activeTab;
    const matchesSearch = searchQuery.trim() === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabLabels = [
    { id: 'hair', label: 'Hair Services' },
    { id: 'makeup', label: 'Makeup Services' },
    { id: 'skin', label: 'Skin & Beauty' },
    { id: 'bridal', label: 'Bridal Services' }
  ] as const;

  return (
    <section id="services" className="py-28 bg-[#080908] text-[#FAF6EE] relative border-t border-[#D4AF37]/20 exotic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37] mb-4 shadow-lg">
            <span className="text-[#E5C378]">⚜</span>
            <span className="font-marcellus tracking-wider">The Haute Couture Service Menu · Maharajganj</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Celebrity Hair, Makeup & <span className="font-italiana italic gold-gradient-text">Beauty Rituals</span>
          </h2>
          <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            Delivering metropolitan hair craftsmanship, certified clinical skin therapies, and couture bridal artistry in Maharajganj.
          </p>
        </div>

        {/* Controls: Exotic Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-14">
          {/* Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto p-1.5 bg-[#101210] rounded-2xl border border-[#D4AF37]/30 shadow-lg">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                }}
                className={`px-5 py-2.5 text-xs md:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#E8C57C] to-[#C4983F] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search rituals (e.g. Balayage, Hydra)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#101210] border border-[#D4AF37]/30 focus:border-[#D4AF37] text-xs text-white rounded-xl pl-9 pr-4 py-3 placeholder-neutral-500 focus:outline-none transition-colors shadow-inner"
            />
            <Search className="w-4 h-4 text-[#D4AF37]/70 absolute left-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Services Cards Grid with Arched Tops */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-t-[3.5rem] rounded-b-2xl bg-[#0D0F0D] border border-neutral-800 hover:border-[#D4AF37]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_15px_45px_rgba(212,175,55,0.12)] hover:-translate-y-1"
              >
                <div>
                  {/* Service Image Container with Arch */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900 rounded-t-[3.5rem]">
                    <SalonImage
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      categoryHint={service.category}
                    />
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#C4983F] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                        Signature Ritual
                      </div>
                    )}
                    <div className="absolute bottom-3 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-neutral-200 flex items-center gap-1.5 border border-[#D4AF37]/30">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-serif-luxury font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed font-sans-clean min-h-[48px] font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Price and Book Now */}
                <div className="px-6 pb-6 pt-4 border-t border-neutral-850/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-light">
                      Starting Investment
                    </span>
                    <span className="text-xl font-semibold font-serif-luxury gold-gradient-text">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#161815] text-white hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#C4983F] hover:text-black transition-all duration-300 flex items-center gap-1.5 border border-[#D4AF37]/30 hover:border-transparent shadow-sm"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#141414] rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">No services matched "{searchQuery}" in this category.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#D4AF37] font-semibold underline"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* Bottom Assurance Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-[#141414]/60 border border-neutral-800/80 flex flex-wrap items-center justify-around gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AF37]" />
            <span>100% Genuine L'Oréal & Kérastase</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AF37]" />
            <span>Compliant with Hospital-Grade Hygiene</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AF37]" />
            <span>Transparent Pricing in Maharajganj, UP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
