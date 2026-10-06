export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'makeup' | 'skin' | 'bridal';
  description: string;
  startingPrice: string;
  priceNum: number;
  duration: string;
  image: string;
  popular?: boolean;
}

export interface ExpertItem {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'bridal' | 'beauty' | 'transformations';
  image: string;
  beforeImage?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  service: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SalonContactInfo {
  name: string;
  brandTagline: string;
  address: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string;
  googleMapsUrl: string;
  instagram: string;
  facebook: string;
}
