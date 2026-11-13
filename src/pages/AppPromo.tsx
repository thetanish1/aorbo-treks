import React from 'react';
import { Smartphone, Bell, Download, ShieldCheck, Zap, Star } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';

export const AppPromo: React.FC = () => {
  const breadcrumbs = [{ label: 'Mobile App' }];

  const features = [
    {
      icon: Bell,
      title: 'Instant Batch Alerts',
      description: 'Get notified first when high-demand batches for Kedarkantha, Har Ki Dun, or Kashmir Great Lakes open for booking.',
    },
    {
      icon: Download,
      title: 'Offline Trail Guides & Maps',
      description: 'Download offline GPX trails, campsite elevation profiles, and emergency contacts before losing cell signal.',
    },
    {
      icon: ShieldCheck,
      title: 'Digital Trekker ID',
      description: 'Store forest permits, identity proofs, and medical self-declarations securely on your device for fast checkpoint clearance.',
    },
    {
      icon: Zap,
      title: 'Direct Organiser Chat',
      description: 'Message your certified trek leader directly for packing advice, train timings, or local vehicle pick-up details.',
    },
  ];

  return (
    <>
      <SEO
        title="Download the TrekNest Mobile App (Google Play)"
        description="Experience frictionless trek bookings, offline mountain maps, instant batch alerts, and real-time organiser chat with the TrekNest app."
        canonical="/app"
        schema={createBreadcrumbSchema([{ name: 'App', item: '/app' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-16 mb-16 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                  <Smartphone className="w-3.5 h-3.5" />
                  Available for Android
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
                  Trek planning in your pocket.
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Compare verified treks from verified organisers across India. Track weather on trails, download offline packing lists, and coordinate directly with guides.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-xl group"
                  >
                    <svg className="w-7 h-7 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.573V3.427c0-.648.225-1.24.609-1.613zM14.922 13.129l2.766-2.766L4.767 2.928a2.38 2.38 0 0 1 .843-.162c.504 0 .999.153 1.422.423l12.428 7.078-4.538 2.862zm0-2.258l4.538 2.862-12.428 7.078a2.808 2.808 0 0 1-1.422.423c-.3 0-.594-.054-.843-.162l12.921-7.435-2.766-2.766zm1.129 1.129l3.585-2.261a1.97 1.97 0 0 1 1.954-.038c.612.351.99.999.99 1.706 0 .707-.378 1.355-.99 1.706l-3.585-2.261a1.328 1.328 0 0 1-.364-.325l-.014-.027.424-.5z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">GET IT ON</span>
                      <span className="text-base font-extrabold tracking-wide">Google Play</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span>4.9 / 5 (1,400+ ratings)</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockups Placeholder */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 bg-slate-900 rounded-[42px] p-3 shadow-2xl border-4 border-slate-700">
                  <div className="w-full bg-slate-950 rounded-[34px] p-5 text-white overflow-hidden space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>10:30</span>
                      <div className="w-3 h-2 bg-emerald-400 rounded-sm" />
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">Live Trail Status</span>
                      <h4 className="font-heading font-bold text-base mt-1 text-white">Kedarkantha Summit</h4>
                      <p className="text-xs text-slate-400">Juda Ka Talab Campsite</p>
                    </div>

                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Camp Elevation:</span>
                        <span className="font-semibold text-white">9,100 ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Oxygen Check:</span>
                        <span className="font-semibold text-emerald-400">96% SpO2 (Optimal)</span>
                      </div>
                    </div>

                    <div className="w-full py-2 bg-emerald-600 rounded-xl text-center text-xs font-bold text-white shadow">
                      GPS Trail Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
                Built For Trekkers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Everything You Need On & Off The Trail
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="bg-white p-6 rounded-card border border-slate-200 shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
