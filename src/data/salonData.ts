import { ServiceItem, ExpertItem, GalleryItem, TestimonialItem, FaqItem, SalonContactInfo } from '../types/salon';

export const initialContactInfo: SalonContactInfo = {
  name: "Delhi Celebrity Salon",
  brandTagline: "Where Beauty Meets Celebrity Style",
  address: "Near Nagar Palika Parishad, Main Market Road",
  city: "Maharajganj",
  district: "Maharajganj District",
  state: "Uttar Pradesh",
  pincode: "273303",
  country: "India",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "care@delhicelebritysalon.com",
  openingHours: "Mon – Sun: 09:30 AM – 08:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=Maharajganj+Uttar+Pradesh",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com"
};

export const salonServices: ServiceItem[] = [
  // --- HAIR SERVICES ---
  {
    id: "hair-cut",
    name: "Celebrity Precision Haircut",
    category: "hair",
    description: "Customized face-contouring haircut, luxury hair wash, invigorating scalp rinse, and signature blowout styling.",
    startingPrice: "₹499",
    priceNum: 499,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "hair-styling",
    name: "Editorial Hair Styling & Blowout",
    category: "hair",
    description: "Glamorous red-carpet waves, sleek straight glass hair, or classic voluminous bouncy blowouts.",
    startingPrice: "₹699",
    priceNum: 699,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "hair-spa",
    name: "Kérastase Intensive Hair Spa",
    category: "hair",
    description: "Deep nourishing ritual with steam infusion, peptide repair masque, and stress-relieving shoulder massage.",
    startingPrice: "₹1,199",
    priceNum: 1199,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "hair-coloring",
    name: "Luxury Hair Coloring",
    category: "hair",
    description: "Ammonia-free rich pigment shades with high-shine sealants for vibrant, long-lasting hair luster.",
    startingPrice: "₹1,499",
    priceNum: 1499,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "global-color",
    name: "Global Rich Tone Coloring",
    category: "hair",
    description: "Complete full-head root-to-tip chromatic coverage with luminous multi-tonal dimensional shine.",
    startingPrice: "₹2,499",
    priceNum: 2499,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "highlights",
    name: "Precision Foil Highlights",
    category: "hair",
    description: "Hand-placed micro-foils designed to accentuate your natural bone structure and hair movement.",
    startingPrice: "₹2,199",
    priceNum: 2199,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "balayage",
    name: "Signature French Balayage",
    category: "hair",
    description: "Artisanal freehand sun-kissed gradient blending caramel, honey, or mocha seamless melts.",
    startingPrice: "₹3,499",
    priceNum: 3499,
    duration: "150 mins",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "keratin-treatment",
    name: "Olaplex & Keratin Infusion",
    category: "hair",
    description: "Intense frizz eradication, bond rebuilding, and velvet smoothness lasting up to 4 months.",
    startingPrice: "₹3,999",
    priceNum: 3999,
    duration: "180 mins",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "smoothening",
    name: "Pro-Liss Hair Smoothening",
    category: "hair",
    description: "Mirror-finish silky straight texture with botanical thermal protectants and gloss sealants.",
    startingPrice: "₹3,499",
    priceNum: 3499,
    duration: "180 mins",
    image: "https://images.unsplash.com/photo-1522337094346-2918b300186a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "hair-treatments",
    name: "Scalp Detox & Hair Fall Control Therapy",
    category: "hair",
    description: "Clinical micro-current stimulation, botanical scalp scrub, and bio-active ampoule infusion.",
    startingPrice: "₹1,599",
    priceNum: 1599,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=700&q=80"
  },

  // --- MAKEUP SERVICES ---
  {
    id: "bridal-makeup",
    name: "Grand Celebrity Bridal Makeup",
    category: "makeup",
    description: "Flawless HD/Airbrush base, waterproof tear-proof application, mink eyelashes, and royal jewellery setting.",
    startingPrice: "₹9,999",
    priceNum: 9999,
    duration: "180 mins",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "engagement-makeup",
    name: "Royal Engagement Glam",
    category: "makeup",
    description: "Luminous glass skin makeup, customized shimmer eye artistry, sculpted contour, and elegant draping.",
    startingPrice: "₹4,999",
    priceNum: 4999,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "reception-makeup",
    name: "Couture Reception Makeup",
    category: "makeup",
    description: "Smoky drama, champagne highlighters, and contemporary high-fashion makeup for your grand banquet.",
    startingPrice: "₹5,999",
    priceNum: 5999,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "party-makeup",
    name: "Celebrity Evening Party Makeup",
    category: "makeup",
    description: "Fresh, radiant skin prep with subtle glam eye makeup, winged liner, and complementary lip shade.",
    startingPrice: "₹2,199",
    priceNum: 2199,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "hd-makeup",
    name: "Ultra HD Studio Makeup",
    category: "makeup",
    description: "Camera-ready high definition silicone-formulated makeup designed for 4K video and flash photography.",
    startingPrice: "₹3,499",
    priceNum: 3499,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "celebrity-inspired-makeup",
    name: "Bollywood & Red Carpet Makeup",
    category: "makeup",
    description: "Iconic celebrity beauty recreations tailored to your skin undertones, cheekbones, and evening attire.",
    startingPrice: "₹3,999",
    priceNum: 3999,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80"
  },

  // --- SKIN & BEAUTY ---
  {
    id: "luxury-facials",
    name: "24K Gold & Hydrafacial Glow",
    category: "skin",
    description: "Deep ultrasound pore extraction, pure gold dust serum infusion, and cryo-firming cold globe therapy.",
    startingPrice: "₹1,899",
    priceNum: 1899,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "cleanup",
    name: "Botanical Deep Pore Cleanup",
    category: "skin",
    description: "AHA/BHA exfoliation, comedone extraction, steam cleanse, and soothing antioxidant algae mask.",
    startingPrice: "₹799",
    priceNum: 799,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1512290900672-1f02e6a394c8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "skin-treatments",
    name: "De-Tan & Pigmentation Corrector",
    category: "skin",
    description: "Clinical brighteners, enzymatic peels, and vitamin C serums formulated for stubborn sun tanning.",
    startingPrice: "₹1,499",
    priceNum: 1499,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "threading",
    name: "Precision Brow & Facial Threading",
    category: "skin",
    description: "Golden ratio eyebrow mapping, gentle antibacterial thread work, and aloe-soothing massage.",
    startingPrice: "₹99",
    priceNum: 99,
    duration: "15 mins",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "waxing",
    name: "Rica Italian White Chocolate Waxing",
    category: "skin",
    description: "Colophony-free painless stripless and strip waxing infused with natural argan oil and titanium dioxide.",
    startingPrice: "₹499",
    priceNum: 499,
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "manicure",
    name: "Luxury Rose Petal Manicure",
    category: "skin",
    description: "Sea salt soak, cuticle treatment, organic sugar scrub, hand massage, and long-wear gel polish finish.",
    startingPrice: "₹699",
    priceNum: 699,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "pedicure",
    name: "Revitalizing Crystal Spa Pedicure",
    category: "skin",
    description: "Jelly hydro-soak, callus peel, volcanic scrub, warm towel wrap, and reflexology foot massage.",
    startingPrice: "₹899",
    priceNum: 899,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=700&q=80"
  },

  // --- BRIDAL SERVICES ---
  {
    id: "bridal-hairstyling",
    name: "Artisanal Bridal Hairstyling",
    category: "bridal",
    description: "Ornate traditional bridal buns, authentic fresh floral mogra/rose integration, or cascading modern bridal waves.",
    startingPrice: "₹2,999",
    priceNum: 2999,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "pre-bridal-services",
    name: "7-Day Pre-Bridal Glow Ritual",
    category: "bridal",
    description: "Complete head-to-toe rejuvenation: full body polish, gold facial, hair spa, premium Rica waxing, and mani-pedi.",
    startingPrice: "₹6,999",
    priceNum: 6999,
    duration: "Multi-session",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "bridal-packages",
    name: "The Imperial Celebrity Bride Package",
    category: "bridal",
    description: "All-inclusive: 3-day pre-bridal rituals, wedding HD/Airbrush makeup, couture hair, jewellery setting, and dupatta draping.",
    startingPrice: "₹15,999",
    priceNum: 15999,
    duration: "Comprehensive",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    popular: true
  }
];

export const expertsList: ExpertItem[] = [
  {
    id: "exp-1",
    name: "Vikram Malhotra",
    role: "Senior Hair Stylist & Creative Director",
    specialization: "Advanced Precision Haircuts, Editorial Blowouts & Texture Reconstruction",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bio: "Trained across premier style academies, Vikram brings metropolitan flair and tailored cuts that naturally complement facial bone structures."
  },
  {
    id: "exp-2",
    name: "Aanya Sharma",
    role: "Lead Bridal & HD Makeup Artist",
    specialization: "Airbrush Bridal Makeup, Royal Wedding Aesthetics & Flawless Glass Skin",
    experience: "9+ Years Experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: "Renowned throughout Maharajganj and Eastern UP for crafting timeless bridal appearances that look mesmerizing in person and on 4K cameras."
  },
  {
    id: "exp-3",
    name: "Rohit Verma",
    role: "Hair Color & Chemical Specialist",
    specialization: "French Balayage, Blonde Toning, Keratin Smoothing & Bond Healing",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: "Certified L'Oréal and Kérastase color technician specializing in zero-damage hair transitions and seamless chromatic blends."
  },
  {
    id: "exp-4",
    name: "Pooja Srivastava",
    role: "Senior Aesthetician & Skin Therapist",
    specialization: "Hydrafacials, 24K Gold Skin Infusions & Pre-Bridal Glow Therapies",
    experience: "7+ Years Experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Passionate about skin biology and customized wellness regimes that revitalize and detoxify tired skin for a luminous bridal glow."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Caramel Melt French Balayage",
    category: "hair",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    description: "Multidimensional warm caramel tones with face-framing money pieces executed in our Maharajganj styling studio."
  },
  {
    id: "gal-2",
    title: "Royal Crimson Bridal Look",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    description: "Signature HD bridal makeup with smokey gold eyes, defined contours, and traditional maang tikka placement."
  },
  {
    id: "gal-3",
    title: "Before & After: Frizz to Mirror Keratin",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1522337094346-2918b300186a?auto=format&fit=crop&w=800&q=80",
    description: "Dramatic texture transformation turning unruly curls into smooth, feather-light mirror hair."
  },
  {
    id: "gal-4",
    title: "Dewy Champagne Engagement Glam",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    description: "Soft glam aesthetic focusing on lit-from-within radiance, fluttery lashes, and nude rose lips."
  },
  {
    id: "gal-5",
    title: "Luxury Salon Vanity Suites",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Our modern salon interior in Maharajganj featuring custom champagne gold mirrors and ergonomic styling stations."
  },
  {
    id: "gal-6",
    title: "24K Gold Hydra Facial Radiance",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    description: "Instant glass skin results immediately following our signature hydro-dermabrasion and gold collagen masque."
  },
  {
    id: "gal-7",
    title: "Before & After: Bridal Radiance",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    description: "Stunning evening transformation highlighting natural bone structure with celebrity airbrush technique."
  },
  {
    id: "gal-8",
    title: "Regal Floral Braided Bun",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Intricately woven bridal hairdo embellished with fresh mogra buds and antique gold hair jewels."
  }
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Priyamvada Singh",
    location: "Civil Lines, Maharajganj",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "I booked my wedding bridal makeup at Delhi Celebrity Salon here in Maharajganj. The level of luxury and finesse blew me away! Everyone at my reception kept asking who did my makeup. You truly brought Bollywood celebrity elegance to our hometown.",
    service: "Grand Bridal Package"
  },
  {
    id: "test-2",
    name: "Ananya Mishra",
    location: "Main Market, Maharajganj",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "Their Balayage and Keratin service is world-class. Previously I used to travel all the way to Gorakhpur or Lucknow for hair treatments, but Delhi Celebrity Salon in Maharajganj provides superior quality with authentic L'Oréal and Olaplex products.",
    service: "Balayage & Olaplex Treatment"
  },
  {
    id: "test-3",
    name: "Ritu Keshari",
    location: "Nagar Palika Area, Maharajganj",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "The salon hygiene, champagne gold interiors, and warm hospitality are unmatched. Their 24K Gold Hydrafacial gave me incredible radiance for my sister's engagement. Highly recommended for anyone in Maharajganj looking for top-tier beauty care.",
    service: "24K Gold Hydra Facial"
  },
  {
    id: "test-4",
    name: "Kavita Jaiswal",
    location: "Sadar Bazar, Maharajganj",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "The staff is extremely courteous and listens carefully to your preferences. My engagement look was subtle yet regal. Delhi Celebrity Salon has set a new benchmark for luxury salons in Maharajganj, UP.",
    service: "Royal Engagement Glam"
  }
];

export const localFaqs: FaqItem[] = [
  {
    question: "Where is Delhi Celebrity Salon physically located?",
    answer: "Delhi Celebrity Salon is proudly located in Maharajganj, Uttar Pradesh, India (near Nagar Palika Parishad, Main Market Road). While our brand name is inspired by Delhi's high-fashion celebrity aesthetic, our physical salon is situated right in Maharajganj, serving clients across the district."
  },
  {
    question: "Do you provide on-venue bridal makeup services in Maharajganj and nearby areas?",
    answer: "Yes, our celebrity bridal artists travel to wedding venues and private residences across Maharajganj district and adjoining regions for bridal and pre-wedding packages upon prior reservation."
  },
  {
    question: "How far in advance should I book my bridal appointment?",
    answer: "Because wedding dates in Maharajganj book out quickly during peak seasons, we recommend reserving your bridal date at least 3 to 6 weeks in advance to secure your preferred artist and schedule trials."
  },
  {
    question: "What beauty and hair care brands do you use?",
    answer: "We strictly use 100% genuine, internationally acclaimed professional brands including L'Oréal Professionnel, Kérastase, Olaplex, M.A.C Cosmetics, Huda Beauty, Kryolan HD, and Rica Waxing."
  },
  {
    question: "Do you offer consultations before hair coloring or chemical treatments?",
    answer: "Absolutely. We offer complimentary personalized hair strand tests and skin patch consultations to evaluate your hair history, porosity, and skin tone before recommending balayage, keratin, or smoothening."
  }
];
