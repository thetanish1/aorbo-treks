import React from 'react';
import { ShieldCheck, UserCheck, PhoneCall, Check, Shield } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';

export const Safety: React.FC = () => {
  const breadcrumbs = [{ label: 'Safety Standards' }];

  return (
    <>
      <SEO
        title="Safety & Mountain Standards - TrekNest"
        description="Learn how TrekNest guarantees safety on every trek: verified organisers, IMF trained guides, adventure travel insurance, and 24/7 emergency evacuation support."
        canonical="/safety"
        schema={createBreadcrumbSchema([{ name: 'Safety', item: '/safety' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Safety First
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Our 4-Pillar Safety Guarantee
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              In high mountains, safety is not an afterthought—it is the foundation of every expedition. Here is how TrekNest verifies and protects you.
            </p>
          </div>

          {/* 4 Checklist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Pillar 1: Verified Organisers */}
            <div className="bg-white p-8 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3">
                1. 100% Verified Organisers
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Before any organiser can publish a single trek package on TrekNest, our team audits their legal entity, past operating track record, gear inventory, and client safety history.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Government & Tourism Board registration verified
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Mandatory gear inspection (ropes, microspikes, 4-season tents)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Zero tolerance policy for substandard trail practices
                </li>
              </ul>
            </div>

            {/* Pillar 2: Trained & Certified Guides */}
            <div className="bg-white p-8 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3">
                2. Trained & Certified Mountain Guides
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Every trek is spearheaded by leaders certified by premier mountaineering institutes like NIM (Uttarkashi), HMI (Darjeeling), or ABVIMAS (Manali).
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Wilderness First Aid (WFA) / CPR trained
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Minimum 1:8 guide-to-trekker ratio for technical ridges
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Indigenous local route experts on all trails
                </li>
              </ul>
            </div>

            {/* Pillar 3: Insurance Partner */}
            <div id="insurance" className="bg-white p-8 rounded-card border border-slate-200 shadow-soft scroll-mt-24">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3">
                3. Comprehensive Insurance Coverage
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                We partner with leading Indian outdoor insurance underwriters to provide optional, affordable coverage for medical emergencies and high-altitude rescue.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Emergency medical expenses up to ₹5,00,000
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Accidental death and permanent disability protection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  High-altitude evacuation coordination support
                </li>
              </ul>
            </div>

            {/* Pillar 4: Emergency Support */}
            <div className="bg-white p-8 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3">
                4. 24/7 Emergency Base Support
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Our central operations desk in Hyderabad coordinates with regional mountain bases, hospital networks, and forest departments round the clock.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Twice daily pulse oximeter & AMS symptom logs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Emergency oxygen cylinder at every high campsite
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  24/7 SOS helpline: +91 40 4821 9900
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
