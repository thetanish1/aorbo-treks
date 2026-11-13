import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, User, Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Trek } from '@/types/trek';
import { Button } from '@/components/common/Button';
import { formatPrice } from '@/lib/utils';

interface BookingModalProps {
  trek: Trek;
  isOpen: boolean;
  onClose: () => void;
  selectedDuration: string;
  selectedDate: string;
  travellers: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  trek,
  isOpen,
  onClose,
  selectedDuration,
  selectedDate,
  travellers,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    emergencyContact: '',
    dietary: 'Standard Vegetarian',
    specialRequests: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const basePrice = trek.fromPrice * travellers;
  const taxesAndPermits = Math.round(basePrice * 0.05);
  const totalAmount = basePrice + taxesAndPermits;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required traveller details.');
      return;
    }
    setStep(2);
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingRef('TN-' + Math.floor(100000 + Math.random() * 900000));
      setStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 z-10"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400">
                Step {step} of 3
              </span>
              <h3 className="font-heading font-bold text-lg text-white">
                {step === 1 && 'Lead Traveller Details'}
                {step === 2 && 'Confirm & Mock Payment'}
                {step === 3 && 'Booking Confirmed!'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress bar */}
          <div className="h-1 bg-slate-100 flex">
            <div
              className="bg-primary-700 h-full transition-all duration-300"
              style={{
                width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%',
              }}
            />
          </div>

          {/* Step 1: Traveller Details */}
          {step === 1 && (
            <form onSubmit={handleProceedToSummary} className="p-6 space-y-4">
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl flex items-center gap-2 text-xs text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-primary-700 shrink-0" />
                <span>
                  Booking for: <strong className="font-semibold">{trek.title}</strong> ({travellers}{' '}
                  {travellers === 1 ? 'person' : 'people'})
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Tanis Sharma"
                    className="w-full text-sm pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tanis@example.com"
                      className="w-full text-sm pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full text-sm pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Hyderabad"
                    className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Meal Preference
                  </label>
                  <select
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleInputChange}
                    className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-700"
                  >
                    <option value="Standard Vegetarian">Standard Vegetarian</option>
                    <option value="Non-Vegetarian (where available)">Non-Vegetarian</option>
                    <option value="Jain / No Onion-Garlic">Jain Friendly</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <Button variant="ghost" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Review Summary
                </Button>
              </div>
            </form>
          )}

          {/* Step 2: Summary & Mock Payment */}
          {step === 2 && (
            <div className="p-6 space-y-5">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Trek:</span>
                  <span className="font-semibold text-slate-900 text-right">{trek.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-medium text-slate-800">{selectedDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Departure:</span>
                  <span className="font-medium text-slate-800">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Travellers:</span>
                  <span className="font-medium text-slate-800">{travellers} pax ({formData.fullName})</span>
                </div>
              </div>

              {/* Price Calculation breakdown */}
              <div className="border-t border-slate-100 pt-3 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Base Package ({formatPrice(trek.fromPrice)} × {travellers})</span>
                  <span>{formatPrice(basePrice)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Permits, Forest Fee & GST (5%)</span>
                  <span>{formatPrice(taxesAndPermits)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-base text-slate-900">
                  <span>Total Payable:</span>
                  <span className="text-accent text-lg font-heading">{formatPrice(totalAmount)}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                🔒 <strong>Demo Sandbox Mode:</strong> Clicking "Complete Mock Payment" simulates a successful gateway transaction without debiting any card or UPI.
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setStep(1)}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                >
                  Back
                </Button>
                <Button
                  variant="accent"
                  isLoading={isProcessing}
                  onClick={handleSimulatePayment}
                >
                  Complete Mock Payment ({formatPrice(totalAmount)})
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Success Confirmation */}
          {step === 3 && (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h4 className="font-heading font-bold text-2xl text-slate-900">
                Booking Confirmed!
              </h4>

              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your reservation for{' '}
                <strong>{trek.title}</strong> has been secured with the verified organiser.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-1.5 max-w-sm mx-auto text-left">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-primary-700">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Confirmation Sent To:</span>
                  <span className="font-medium text-slate-800">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">WhatsApp Updates:</span>
                  <span className="font-medium text-slate-800">{formData.phone}</span>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="primary" fullWidth onClick={handleReset}>
                  Done & Return to Trek
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
