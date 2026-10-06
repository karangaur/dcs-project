import React from 'react';
import { Sparkles, Calendar, Award } from 'lucide-react';
import { ExpertItem } from '../types/salon';
import { expertsList } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface OurExpertsProps {
  onSelectExpertForBooking: (expertId: string) => void;
}

export const OurExperts: React.FC<OurExpertsProps> = ({ onSelectExpertForBooking }) => {
  return (
    <section id="team" className="py-28 bg-[#080908] text-[#FAF6EE] relative border-t border-[#D4AF37]/20 exotic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141813] border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37] mb-4 shadow-lg">
            <span className="text-[#E5C378]">⚜</span>
            <span className="font-marcellus tracking-wider">Master Stylists & Artisans · Maharajganj</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Meet Our Celebrity <span className="font-italiana italic gold-gradient-text">Artists</span>
          </h2>
          <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            Our team in Maharajganj brings certified training from elite academies, combining technical precision with artistic passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertsList.map((expert) => (
            <div
              key={expert.id}
              className="group rounded-t-[3.5rem] rounded-b-2xl bg-[#0D0F0D] border border-neutral-800 hover:border-[#D4AF37]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_15px_45px_rgba(212,175,55,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Profile Photo with Arch */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 rounded-t-[3.5rem]">
                  <SalonImage
                    src={expert.image}
                    alt={`${expert.name} - ${expert.role} at Delhi Celebrity Salon Maharajganj`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    categoryHint="Master Artist"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0D] via-transparent to-transparent opacity-90" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1 rounded-full text-[10px] font-semibold text-[#D4AF37]">
                    {expert.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif-luxury text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                    {expert.name}
                  </h3>
                  <span className="text-xs text-[#D4AF37] font-medium block mt-0.5">
                    {expert.role}
                  </span>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold mb-1">
                      Specialization
                    </span>
                    <p className="text-xs text-neutral-300 leading-snug">
                      {expert.specialization}
                    </p>
                  </div>

                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed font-sans-clean italic font-light">
                    "{expert.bio}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectExpertForBooking(expert.id)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#161815] border border-[#D4AF37]/30 text-neutral-200 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#C4983F] hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve with {expert.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
