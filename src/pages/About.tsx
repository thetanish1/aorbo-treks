import React from 'react';
import { Mountain, HeartHandshake } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';

export const About: React.FC = () => {
  const breadcrumbs = [{ label: 'About Us' }];

  const numbers = [
    { label: 'Verified Treks', value: '70+' },
    { label: 'Happy Trekkers', value: '25,000+' },
    { label: 'Certified Organisers', value: '18+' },
    { label: 'Himalayan & Ghats States', value: '14' },
  ];

  const team = [
    {
      name: 'Aditya Rao',
      role: 'Co-Founder & Mountaineering Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'IMF Advanced Mountaineering graduate with over 40 Himalayan summits across Garhwal and Ladakh.',
    },
    {
      name: 'Suhasini Reddy',
      role: 'Co-Founder & Operations Head',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Ex-tech product manager turned trail runner. Passionate about bringing transparency to adventure tourism.',
    },
    {
      name: 'Karan Mehra',
      role: 'Head of Safety & Partner Verification',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Wilderness First Responder (WFR) certified with 12 years of mountain rescue and expedition logistics experience.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us - India's Dedicated Trek Booking Marketplace"
        description="Learn how TrekNest brings transparency, verified safety standards, and direct aggregator pricing to outdoor trekking across India. Based in Hyderabad, Telangana."
        canonical="/about"
        schema={createBreadcrumbSchema([{ name: 'About Us', item: '/about' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Our Journey
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Making trekking in India simple, verified, and accessible.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-content-muted leading-relaxed">
              Based in Hyderabad, Telangana, TrekNest was founded with a single mission: to replace disjointed WhatsApp groups and untrusted agents with a unified, transparent booking platform for verified trek organisers across India.
            </p>
          </div>

          {/* Numbers / Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {numbers.map((num) => (
              <div
                key={num.label}
                className="bg-white p-6 rounded-card border border-slate-200 shadow-soft text-center"
              >
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-700">
                  {num.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2">
                  {num.label}
                </div>
              </div>
            ))}
          </div>

          {/* Our Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-card border border-slate-200 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center">
                <Mountain className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe the great outdoors should be accessible to everyone—from solo female travellers setting foot on their first snow trail to seasoned mountaineers attempting high passes. By aggregating verified local organisers, we guarantee safety, fair prices, and direct accountability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-card border border-slate-200 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Local Community Empowerment
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Rather than operating monopolistic centralized tours, TrekNest partners with indigenous local guides, pahadi homestays, and regional adventure cooperatives. Over 70% of every rupee spent goes directly into the hands of local mountain communities.
              </p>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
                Behind TrekNest
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Meet the Founding Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white p-6 rounded-card border border-slate-200 shadow-soft text-center flex flex-col items-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100 mb-4 shadow-sm"
                  />
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-primary-700 mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
