import React, { useState } from 'react';
import { ChevronDown, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import { localFaqs } from '../data/salonData';

export const LocalSeoFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const localKeywords = [
    "Delhi Celebrity Salon Maharajganj",
    "Best salon in Maharajganj",
    "Beauty salon in Maharajganj",
    "Hair salon in Maharajganj",
    "Bridal makeup Maharajganj",
    "Makeup artist Maharajganj",
    "Bridal salon Maharajganj",
    "Hair stylist Maharajganj",
    "Beauty parlour Maharajganj",
    "Luxury salon Maharajganj",
    "Salon in Maharajganj Uttar Pradesh"
  ];

  return (
    <section className="py-28 bg-[#060706] text-[#FAF6EE] relative border-t border-[#D4AF37]/20 exotic-pattern-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37] mb-4 shadow-lg">
            <span className="text-[#E5C378]">⚜</span>
            <span className="font-marcellus tracking-wider">Sanctuary Intelligence · Maharajganj Guide</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Frequently Asked <span className="font-italiana italic gold-gradient-text">Questions</span>
          </h2>
          <p className="mt-3 text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
            Everything you need to know about visiting Delhi Celebrity Salon in Maharajganj, Uttar Pradesh.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {localFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D0F0D] border border-neutral-800/80 hover:border-[#D4AF37]/40 transition-colors overflow-hidden exotic-glass-hover"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm font-medium text-white hover:text-[#D4AF37] transition-colors"
                >
                  <span className="font-serif-luxury text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans-clean border-t border-neutral-850">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local Maharajganj SEO Service Tags */}
        <div className="mt-16 p-6 rounded-2xl bg-[#121110] border border-[#D4AF37]/20 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving Maharajganj District & Eastern Uttar Pradesh</span>
          </div>
          <p className="text-xs text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-4">
            Delhi Celebrity Salon is committed to providing luxury hair cuts, hair coloring, balayage, keratin smoothing, HD bridal makeup, and skin care for patrons across Maharajganj, UP and adjoining towns.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {localKeywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] text-neutral-400 hover:text-[#D4AF37] bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800 transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
