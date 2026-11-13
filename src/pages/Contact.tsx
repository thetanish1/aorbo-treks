import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { AnimatedGlobe } from '@/components/common/AnimatedGlobe';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const breadcrumbs = [{ label: 'Contact Us' }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Contact TrekNest - Outdoor Marketplace Support"
        description="Have questions about booking a trek, partnering as an organiser, or emergency support? Contact TrekNest in Hyderabad, Telangana."
        canonical="/contact"
        schema={createBreadcrumbSchema([{ name: 'Contact', item: '/contact' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Contact our team
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              We’re here to help you plan your next mountain journey, resolve booking questions, or onboard as an adventure organiser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Information & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                    Headquarters
                  </h3>
                  <div className="flex items-start gap-3.5 text-sm text-slate-600">
                    <MapPin className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800">TrekNest Technologies Pvt Ltd</strong>
                      <span>Plot No. 42, Hitech City Main Road, Madhapur,</span>
                      <br />
                      <span>Hyderabad, Telangana – 500081, India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3.5 text-sm text-slate-600">
                    <Mail className="w-5 h-5 text-primary-700 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Email us</span>
                      <a href="mailto:support@treknest.in" className="font-semibold text-slate-800 hover:text-primary-700">
                        support@treknest.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-slate-600">
                    <Phone className="w-5 h-5 text-primary-700 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Call / WhatsApp Helpline</span>
                      <a href="tel:+914048219900" className="font-semibold text-slate-800 hover:text-primary-700">
                        +91 (040) 4821 9900
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Connect on Socials
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-700 hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://quora.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-700 hover:text-white transition-colors font-bold text-sm"
                    >
                      Q
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-700 hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-700 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Routes Globe */}
              <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full mb-1">
                    Pan-India Network
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Live Trek Routes & Hubs
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Connecting adventurers from our Hyderabad basecamp to verified trails across India.
                  </p>
                </div>
                <AnimatedGlobe />
              </div>
            </div>

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-card border border-slate-200 shadow-soft">
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  We usually respond within 2–4 hours during normal operating hours (9 AM – 8 PM IST).
                </p>

                {isSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Thank you! Message received.</strong>
                      <span className="text-xs sm:text-sm text-emerald-800">
                        Our adventure specialist team in Hyderabad will get back to you shortly.
                      </span>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanis Sharma"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tanis@example.com"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-700"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Trek Booking Support">Trek Booking Support</option>
                        <option value="Organiser Partnership">Organiser Partnership</option>
                        <option value="Corporate / Custom Group">Corporate / Custom Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what trek you're planning, your travel dates, or how we can help..."
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

