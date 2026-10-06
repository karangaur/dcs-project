import React, { useState } from 'react';
import { initialContactInfo } from './data/salonData';
import { SalonContactInfo } from './types/salon';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BridalSpotlight } from './components/BridalSpotlight';
import { GallerySection } from './components/GallerySection';
import { OurExperts } from './components/OurExperts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocalSeoFaq } from './components/LocalSeoFaq';
import { LocationContact } from './components/LocationContact';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';
import { StoryModal } from './components/StoryModal';

export default function App() {
  const [contactInfo, setContactInfo] = useState<SalonContactInfo>(initialContactInfo);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(null);
  };

  const handleOpenStory = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStory = () => {
    setIsStoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAF6EE] selection:bg-[#D4AF37]/30 selection:text-[#FAF6EE]">
      {/* Sticky Navigation */}
      <Navbar
        contactInfo={contactInfo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. About Section */}
        <AboutSection
          onOpenStory={handleOpenStory}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Services Section */}
        <ServicesSection
          onSelectServiceForBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 4. Bridal Spotlight */}
        <BridalSpotlight
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 5. Gallery & Transformations */}
        <GallerySection
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 6. Our Experts / Team */}
        <OurExperts
          onSelectExpertForBooking={(expertId) => handleOpenBooking()}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Local SEO & FAQs for Maharajganj, UP */}
        <LocalSeoFaq />

        {/* 10. Location & Contact Details */}
        <LocationContact
          contactInfo={contactInfo}
          onUpdateContactInfo={setContactInfo}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 11. Final Transformation CTA */}
        <FinalCta
          contactInfo={contactInfo}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer contactInfo={contactInfo} />

      {/* Sticky Mobile Bottom Quick Actions (Under 15% Viewport Height) */}
      <MobileBottomBar
        contactInfo={contactInfo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Reservation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
        contactInfo={contactInfo}
      />

      {/* Discover Our Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={handleCloseStory}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
