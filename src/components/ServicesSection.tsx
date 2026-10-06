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
    <section id="services" className="py-24 bg-[#0D0D0D] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Menu · Maharajganj, UP</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Celebrity Hair, Makeup & Beauty Services
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            Delivering metropolitan hair craftsmanship, certified clinical skin therapies, and couture bridal artistry in Maharajganj.
          </p>
        </div>

        {/* Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto p-1.5 bg-[#141414] rounded-2xl border border-neutral-800">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                }}
                className={`px-5 py-2.5 text-xs md:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
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
              placeholder="Search services (e.g. Balayage, Facial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-neutral-800 focus:border-[#D4AF37] text-xs text-white rounded-xl pl-9 pr-4 py-3 placeholder-neutral-500 focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#141414] border border-neutral-850 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Service Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <SalonImage
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      categoryHint={service.category}
                    />
                    {service.popular && (
                      <div className="absolute top-3 right-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                        Signature Choice
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-neutral-300 flex items-center gap-1.5 border border-neutral-800">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-serif-luxury font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed font-sans-clean min-h-[48px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Price and Book Now */}
                <div className="px-6 pb-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Starting From
                    </span>
                    <span className="text-lg font-semibold font-serif-luxury text-[#D4AF37]">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="py-2 px-4 rounded-xl text-xs font-semibold bg-neutral-800 text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-200 flex items-center gap-1.5 group-hover:bg-[#D4AF37] group-hover:text-black"
                  >
                    <span>Book Now</span>
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
