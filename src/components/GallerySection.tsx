import React, { useState } from 'react';
import { Sparkles, Maximize2, X, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../types/salon';
import { galleryItems } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface GallerySectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'makeup' | 'bridal' | 'beauty' | 'transformations'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Maharajganj Salon Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Celebrity Transformations & Artistry
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            Witness the craftsmanship from our styling chairs in Maharajganj, Uttar Pradesh. From dramatic hair color melts to regal bridal looks.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(
            [
              { id: 'all', label: 'All Showcase' },
              { id: 'hair', label: 'Hair' },
              { id: 'makeup', label: 'Makeup' },
              { id: 'bridal', label: 'Bridal' },
              { id: 'beauty', label: 'Beauty' },
              { id: 'transformations', label: 'Transformations' }
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-semibold'
                  : 'bg-[#141414] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Special Interactive Before/After Transformation Feature (shown when all or transformations is active) */}
        {(activeFilter === 'all' || activeFilter === 'transformations') && (
          <div className="mb-14 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-[#D4AF37]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Interactive Reveal
                </span>
                <h3 className="text-2xl font-serif-luxury text-white mt-1">
                  Hair Texture & Volume Transformation
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Drag the slider handle horizontally to view the before & after hair smoothening outcome.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                <span>Slide to compare</span>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[440px] rounded-xl overflow-hidden select-none touch-none border border-neutral-800">
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <SalonImage
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80"
                  alt="After Keratin Smoothening at Delhi Celebrity Salon Maharajganj"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-black/75 px-3 py-1 rounded text-xs text-[#D4AF37] font-semibold tracking-wider">
                  AFTER · MIRROR SMOOTH
                </div>
              </div>

              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="w-full h-full relative" style={{ width: '100%', minWidth: '1000px' }}>
                  <SalonImage
                    src="https://images.unsplash.com/photo-1522337094346-2918b300186a?auto=format&fit=crop&w=1200&q=80"
                    alt="Before Hair Texture"
                    className="w-full h-full object-cover filter saturate-50"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 rounded text-xs text-neutral-300 font-semibold tracking-wider">
                    BEFORE · DRY & FRIZZY
                  </div>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg transform -translate-x-1/2 cursor-ew-resize">
                  <SlidersHorizontal className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* Interactive Range Input Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                aria-label="Before and after transformation slider"
              />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400">
                Conducted with authentic Kérastase & Olaplex treatments in Maharajganj, UP.
              </span>
              <button
                onClick={() => onOpenBooking('keratin-treatment')}
                className="text-xs font-semibold text-[#D4AF37] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Book This Keratin Transformation <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#141414] border border-neutral-850 hover:border-[#D4AF37]/50 cursor-pointer transition-all duration-300 aspect-[4/5] flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <SalonImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  categoryHint={item.category}
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Box */}
              <div className="relative p-5 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 mb-2">
                  {item.category}
                </span>
                <h4 className="text-base font-serif-luxury font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-medium">View in Lightbox</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121212] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/60 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media side */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[75vh]">
              <SalonImage
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Details side */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#121212]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Delhi Celebrity Salon · Maharajganj
                </span>
                <h3 className="text-2xl font-serif-luxury text-white mt-1 font-medium">
                  {activeLightboxItem.title}
                </h3>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-neutral-800 text-neutral-300">
                  Category: {activeLightboxItem.category}
                </span>

                <p className="mt-4 text-xs md:text-sm text-neutral-300 leading-relaxed font-sans-clean">
                  {activeLightboxItem.description}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#1A1815] border border-[#D4AF37]/20 text-xs text-neutral-400 space-y-1">
                  <p className="text-neutral-200 font-medium">📍 Service Location:</p>
                  <p>Delhi Celebrity Salon, Maharajganj, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    const item = activeLightboxItem;
                    setActiveLightboxItem(null);
                    onOpenBooking(item.category === 'bridal' ? 'bridal-makeup' : 'hair-styling');
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-xs rounded-xl shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Similar Celebrity Style
                </button>
                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="w-full py-2.5 bg-neutral-800 text-neutral-300 font-medium text-xs rounded-xl hover:bg-neutral-750 transition-colors"
                >
                  Close Lightbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
