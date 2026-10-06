import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';
import { ServiceItem, ExpertItem, SalonContactInfo } from '../types/salon';
import { salonServices, expertsList } from '../data/salonData';
import { BrandName } from './BrandName';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string | null;
  contactInfo: SalonContactInfo;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  contactInfo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hair' | 'makeup' | 'skin' | 'bridal'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedExpertId, setSelectedExpertId] = useState<string>('any');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Update selected service if passed via props
  useEffect(() => {
    if (preselectedServiceId) {
      const found = salonServices.find(s => s.id === preselectedServiceId);
      if (found) {
        setSelectedServiceId(found.id);
        setSelectedCategory(found.category);
      }
    } else if (!selectedServiceId && salonServices.length > 0) {
      setSelectedServiceId(salonServices[0].id);
    }
  }, [preselectedServiceId, isOpen]);

  if (!isOpen) return null;

  const filteredServices = selectedCategory === 'all'
    ? salonServices
    : salonServices.filter(s => s.category === selectedCategory);

  const selectedService = salonServices.find(s => s.id === selectedServiceId) || salonServices[0];
  const selectedExpert = expertsList.find(e => e.id === selectedExpertId);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:30 PM',
    '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM', '07:30 PM'
  ];

  const handleInAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!clientPhone.trim() || clientPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    setErrorMsg('');
    const refCode = `DCS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    if (!clientName.trim()) {
      setErrorMsg('Please enter your name before connecting on WhatsApp');
      return;
    }
    setErrorMsg('');
    const expertName = selectedExpert ? selectedExpert.name : 'First Available Specialist';
    const message = `Hello Delhi Celebrity Salon Maharajganj!%0A%0AI would like to book an appointment:%0A• *Client Name:* ${encodeURIComponent(clientName)}%0A• *Phone:* ${encodeURIComponent(clientPhone || 'Provided in chat')}%0A• *Service:* ${encodeURIComponent(selectedService.name)} (${selectedService.startingPrice})%0A• *Preferred Specialist:* ${encodeURIComponent(expertName)}%0A• *Date:* ${encodeURIComponent(selectedDate)}%0A• *Time Slot:* ${encodeURIComponent(selectedTime)}%0A• *Location:* Maharajganj, UP Salon%0A${notes ? `• *Special Notes:* ${encodeURIComponent(notes)}%0A` : ''}%0APlease confirm my booking slot. Thank you!`;

    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 md:p-8 text-[#FAF6EE] my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6 flex flex-col items-center">
              <BrandName variant="navbar" className="mb-2" />
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Celebrity Beauty Experience · Maharajganj
              </span>
              <h2 className="text-2xl font-serif-luxury mt-1 font-semibold text-white">
                Reserve Your Appointment
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 mt-1 max-w-md mx-auto">
                Select your desired service, date, and specialist at our luxury salon in Maharajganj, Uttar Pradesh.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/50 border border-red-500/40 rounded-lg text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleInAppSubmit} className="space-y-5">
              {/* Category Segmented Control */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                  1. Select Category
                </label>
                <div className="grid grid-cols-5 gap-1.5 p-1 bg-[#1A1A1A] rounded-xl border border-neutral-800">
                  {(['all', 'hair', 'makeup', 'skin', 'bridal'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        const firstInCat = cat === 'all' 
                          ? salonServices[0] 
                          : salonServices.find(s => s.category === cat);
                        if (firstInCat) setSelectedServiceId(firstInCat.id);
                      }}
                      className={`py-1.5 text-xs font-medium rounded-lg capitalize transition-colors whitespace-nowrap ${
                        selectedCategory === cat
                          ? 'bg-[#D4AF37] text-black font-semibold shadow'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                  2. Choose Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  {filteredServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} — {service.startingPrice} ({service.duration})
                    </option>
                  ))}
                </select>
                {selectedService && (
                  <p className="text-xs text-neutral-400 mt-1.5 italic">
                    {selectedService.description}
                  </p>
                )}
              </div>

              {/* Expert Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                  3. Select Stylist or Specialist
                </label>
                <select
                  value={selectedExpertId}
                  onChange={(e) => setSelectedExpertId(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="any">First Available Celebrity Stylist</option>
                  {expertsList.map((expert) => (
                    <option key={expert.id} value={expert.id}>
                      {expert.name} — {expert.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    />
                    <Calendar className="w-4 h-4 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Client Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      required
                      className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  placeholder="e.g., Bridal trial needed, hair wash before cut, skin sensitivity..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="w-full bg-[#1A1A1A] border border-neutral-750 focus:border-[#D4AF37] rounded-xl px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-black font-semibold text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Confirm Reservation In-App
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="py-3 px-5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm rounded-xl hover:bg-[#25D366]/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book via WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500 mt-2">
                📍 Location: Delhi Celebrity Salon, Maharajganj, Uttar Pradesh. Payment is made at the salon upon completion.
              </p>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif-luxury font-semibold text-white">
              Appointment Reserved!
            </h3>

            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-white">{clientName}</span>. Your reservation at <BrandName variant="inline" className="text-xs sm:text-sm" /> (Maharajganj) is confirmed.
            </p>

            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Booking Reference:</span>
                <span className="font-mono text-[#D4AF37] font-semibold">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Selected Service:</span>
                <span className="text-white font-medium">{selectedService.name}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="text-white font-medium">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Stylist:</span>
                <span className="text-white font-medium">
                  {selectedExpert ? selectedExpert.name : 'First Available Celebrity Stylist'}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-400">Location:</span>
                <span className="text-white font-medium">Maharajganj, Uttar Pradesh</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <button
                onClick={handleWhatsAppSubmit}
                className="py-2.5 px-4 bg-[#25D366] text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Send Copy to WhatsApp
              </button>
              <button
                onClick={resetForm}
                className="py-2.5 px-4 bg-neutral-800 text-neutral-200 font-semibold text-xs rounded-xl hover:bg-neutral-700 transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
