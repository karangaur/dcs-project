import React from 'react';
import { 
  Users, 
  Sparkles, 
  MessageSquareHeart, 
  Building2, 
  ShieldCheck, 
  Focus, 
  Smile, 
  Crown 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Master stylists and bridal makeup artists certified from premier academies with over a decade of hands-on salon artistry."
    },
    {
      icon: Crown,
      title: "Premium Products",
      description: "Zero compromises: 100% genuine formulations from L'Oréal Professionnel, Kérastase, Olaplex, M.A.C, and Kryolan HD."
    },
    {
      icon: MessageSquareHeart,
      title: "Personalized Consultations",
      description: "Every appointment includes face-shape analysis, hair porosity evaluation, and tone profiling before styling begins."
    },
    {
      icon: Building2,
      title: "Modern Salon Environment",
      description: "Architect-designed interiors with champagne gold accents, plush Italian leather chairs, and dedicated bridal suites in Maharajganj."
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Workspace",
      description: "Autoclave-sterilized tools, single-use fresh capes and towels, and hospital-standard clean vanity stations."
    },
    {
      icon: Focus,
      title: "Attention to Detail",
      description: "From symmetrical eyebrow mapping to pixel-perfect micro-foil balayage and flawless lehenga drape pinning."
    },
    {
      icon: Smile,
      title: "Friendly Welcoming Service",
      description: "Warm, respectful, and accommodating hospitality that makes every guest feel like royalty from the moment they arrive."
    },
    {
      icon: Sparkles,
      title: "Luxury Beauty Experience",
      description: "Delivering high-end celebrity glamour conveniently right here in Maharajganj, Uttar Pradesh at honest, transparent rates."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>The Delhi Celebrity Salon Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Why Choose Us in Maharajganj
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            We hold ourselves to uncompromising standards of aesthetic refinement, sanitization, and guest satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-neutral-850 hover:border-[#D4AF37]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F1C16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-luxury text-white font-medium group-hover:text-[#D4AF37] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans-clean">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
