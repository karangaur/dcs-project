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
    <section id="team" className="py-24 bg-[#0D0D0D] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Stylists & Artists</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Meet Our Celebrity Artists
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            Our team in Maharajganj brings certified training from elite academies, combining technical precision with artistic passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertsList.map((expert) => (
            <div
              key={expert.id}
              className="group rounded-2xl bg-[#141414] border border-neutral-850 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Profile Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <SalonImage
                    src={expert.image}
                    alt={`${expert.name} - ${expert.role} at Delhi Celebrity Salon Maharajganj`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    categoryHint="Master Artist"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/40 px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#D4AF37]">
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

                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed font-sans-clean italic">
                    "{expert.bio}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectExpertForBooking(expert.id)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-200 hover:bg-[#D4AF37] hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {expert.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
