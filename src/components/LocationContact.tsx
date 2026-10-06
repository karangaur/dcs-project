import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  Navigation, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Edit3, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SalonContactInfo } from '../types/salon';

interface LocationContactProps {
  contactInfo: SalonContactInfo;
  onUpdateContactInfo: (updated: SalonContactInfo) => void;
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({
  contactInfo,
  onUpdateContactInfo,
  onOpenBooking
}) => {
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryError, setInquiryError] = useState('');

  // Editable details modal/drawer state
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [editForm, setEditForm] = useState<SalonContactInfo>(contactInfo);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) {
      setInquiryError('Please provide both your name and phone number');
      return;
    }
    setInquiryError('');
    setInquirySent(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 2000);
  };

  const handleSaveDetails = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateContactInfo(editForm);
    setIsEditingDetails(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] text-[#FAF6EE] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1815] border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#D4AF37] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Maharajganj, Uttar Pradesh, India</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Visit Delhi Celebrity Salon
          </h2>
          <p className="mt-3 text-neutral-400 text-sm md:text-base leading-relaxed">
            Located in Maharajganj, Uttar Pradesh. Connect with our concierge or drop in for a personalized beauty consultation.
          </p>
        </div>

        {/* 4 Primary Action Buttons Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="py-3.5 px-4 rounded-xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] text-white flex items-center justify-center gap-2.5 text-xs font-semibold transition-all hover:bg-neutral-800 group shadow-md"
          >
            <Phone className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Delhi%20Celebrity%20Salon%20Maharajganj!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 text-[#25D366] flex items-center justify-center gap-2.5 text-xs font-semibold transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={contactInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-[#141414] border border-neutral-800 hover:border-[#D4AF37] text-white flex items-center justify-center gap-2.5 text-xs font-semibold transition-all hover:bg-neutral-800 group shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span>Get Directions</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold flex items-center justify-center gap-2.5 text-xs hover:brightness-110 transition-all shadow-lg"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Content Grid: Contact Details, Map & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Salon Details Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#141414] border border-neutral-850 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl font-serif-luxury text-white font-medium">
                  {contactInfo.name}
                </h3>
                <span className="text-xs text-[#D4AF37] block mt-0.5">
                  Maharajganj, Uttar Pradesh, India
                </span>
              </div>
              <button
                onClick={() => {
                  setEditForm(contactInfo);
                  setIsEditingDetails(true);
                }}
                className="p-1.5 text-xs text-neutral-400 hover:text-[#D4AF37] hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1"
                title="Edit salon business contact placeholders"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="text-[10px]">Edit Info</span>
              </button>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#1F1C16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Salon Address</span>
                <p className="text-neutral-200 mt-0.5 leading-relaxed font-sans-clean">
                  {contactInfo.address}<br />
                  {contactInfo.city}, {contactInfo.state} {contactInfo.pincode}<br />
                  {contactInfo.country}
                </p>
                <span className="inline-block mt-1 text-[10px] text-[#D4AF37]">
                  (Located in Maharajganj district)
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#1F1C16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Phone Support</span>
                <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-[#D4AF37] font-semibold mt-0.5 block transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#1F1C16] border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">WhatsApp Concierge</span>
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#25D366] font-semibold mt-0.5 block transition-colors"
                >
                  {contactInfo.whatsapp}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#1F1C16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Email Address</span>
                <a href={`mailto:${contactInfo.email}`} className="text-neutral-200 hover:text-[#D4AF37] mt-0.5 block transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#1F1C16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-400 block font-medium">Opening Hours</span>
                <p className="text-neutral-200 mt-0.5">
                  {contactInfo.openingHours}
                </p>
                <span className="text-[10px] text-emerald-400 font-medium">
                  Open 7 Days a Week
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Google Maps Embed for Maharajganj */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-[#141414] border border-neutral-850 flex flex-col h-full min-h-[400px]">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-semibold text-white">Maharajganj, UP Map Location</span>
              </div>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive OpenStreetMap / Google Maps iframe focused on Maharajganj, UP */}
            <div className="flex-1 w-full relative min-h-[340px]">
              <iframe
                title="Delhi Celebrity Salon Maharajganj Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113642.41724298132!2d83.47355601243187!3d27.14389086820251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399696c703eb5555%3A0x6e9f4ebcfebc00!2sMaharajganj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter invert-[0.88] hue-rotate-180 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 3: Quick Direct Message Form */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#141414] border border-neutral-850">
            <h3 className="text-xl font-serif-luxury text-white font-medium mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-sans-clean">
              Have a question about hair coloring, bridal slots, or customized packages in Maharajganj? Message our reception.
            </p>

            {inquiryError && (
              <div className="mb-4 p-2.5 bg-red-950/60 border border-red-500/40 rounded-lg text-red-200 text-xs">
                {inquiryError}
              </div>
            )}

            {inquirySent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif-luxury text-white">Inquiry Received</h4>
                <p className="text-xs text-neutral-300">
                  Our Maharajganj salon concierge will connect with you promptly.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-2 text-xs text-[#D4AF37] hover:underline"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Shalini Verma"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    required
                    className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-[#D4AF37] text-xs text-white rounded-xl px-4 py-2.5 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 98765 43210"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    required
                    className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-[#D4AF37] text-xs text-white rounded-xl px-4 py-2.5 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Message or Service Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about bridal availability, hair smoothing pricing, or booking timings..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-[#D4AF37] text-xs text-white rounded-xl px-4 py-2 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-xs rounded-xl shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Salon</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Edit Business Details Modal (allows client/admin to customize placeholders) */}
      {isEditingDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-lg w-full bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-2xl text-white">
            <h3 className="text-xl font-serif-luxury font-medium text-white mb-1">
              Edit Business Placeholders
            </h3>
            <p className="text-xs text-neutral-400 mb-4">
              Update phone numbers, address, or hours. Note: Salon must remain in Maharajganj, Uttar Pradesh.
            </p>

            <form onSubmit={handleSaveDetails} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Salon Address</label>
                <input
                  type="text"
                  value={editForm.address}
                  onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 px-3 py-2 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-neutral-750 px-3 py-2 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={editForm.whatsapp}
                    onChange={(e) => setEditForm({ ...editForm, whatsapp: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-neutral-750 px-3 py-2 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 px-3 py-2 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Opening Hours</label>
                <input
                  type="text"
                  value={editForm.openingHours}
                  onChange={(e) => setEditForm({ ...editForm, openingHours: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 px-3 py-2 rounded-lg text-white"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#D4AF37] text-black font-semibold rounded-lg hover:brightness-110"
                >
                  Save Business Details
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingDetails(false)}
                  className="py-2.5 px-4 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
