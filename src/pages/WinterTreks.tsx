import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, MapPin, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Chip } from '@/components/common/Chip';
import { TrekCard } from '@/components/trek/TrekCard';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { SEO, createBreadcrumbSchema, createFaqSchema } from '@/components/common/SEO';
import { useWinterTreks } from '@/hooks/useTreks';
import { useWinterFaqs } from '@/hooks/useDestinations';
import { WINTER_DESTINATION_CHIPS } from '@/data/destinations';

export const WinterTreks: React.FC = () => {
  const { data: winterTreks = [] } = useWinterTreks();
  const { data: winterFaqs = [] } = useWinterFaqs();

  const breadcrumbs = [
    { label: 'Seasonal Collections', href: '/destinations' },
    { label: 'Winter Treks & Snow Trips' },
  ];

  return (
    <>
      <SEO
        title="Winter Treks & Snow Trips (2026–27 Season)"
        description="15 snow treks and trips in Himachal Pradesh, Jammu and Kashmir, Punjab, Sikkim, Uttarakhand and West Bengal, from verified trek organisers. Prices from ₹1,150 onwards."
        canonical="/winter-treks"
        schema={[
          createBreadcrumbSchema([
            { name: 'Destinations', item: '/destinations' },
            { name: 'Winter Treks', item: '/winter-treks' },
          ]),
          createFaqSchema(winterFaqs),
        ]}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Hero / Header Section */}
          <div className="relative bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900 text-white rounded-3xl p-6 sm:p-12 lg:p-16 mb-12 shadow-2xl overflow-hidden">
            {/* Background Ice / Snow overlay texture */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
                Winter 2026–27
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight sm:leading-none text-white">
                Winter treks & <span className="text-cyan-300">snow trips</span>
              </h1>

              {/* Exact lead sentence from prompt */}
              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-100 font-medium leading-relaxed">
                15 snow treks and trips in Himachal Pradesh, Jammu and Kashmir, Punjab, Sikkim, Uttarakhand and West Bengal, from verified trek organisers.
              </p>

              {/* Exact summary paragraph from prompt */}
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                The Himalayan winter season runs from <strong>November to March</strong> with powder snow peaking from late December through January. Prices start from just <strong>₹1,150 per person</strong>, with durations spanning quick 2-day weekend jaunts to immersive 10-day cross-valley expeditions.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  IMF Certified Guides
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Microspikes & Gaiters Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Medical Oxygen On-Site
                </span>
              </div>
            </div>
          </div>

          {/* Winter Destinations Chip List */}
          <div className="bg-white p-5 sm:p-6 rounded-card border border-slate-200 shadow-soft mb-12">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-700" />
                <span>Winter Snow Destinations:</span>
              </h3>
              <span className="text-xs text-slate-500">Click to view region packages</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {WINTER_DESTINATION_CHIPS.map((dest) => (
                <Link key={dest.slug} to={`/destinations/${dest.slug}`}>
                  <Chip
                    count={dest.count}
                    variant="outline"
                    className="hover:border-primary-700 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                  >
                    {dest.name}
                  </Chip>
                </Link>
              ))}
            </div>
          </div>

          {/* Responsive Grid of TrekCards: 1 col mobile, 2 tablet, 3 desktop */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                All 15 Verified Snow Packages ({winterTreks.length} Available)
              </h2>
              <span className="text-xs text-slate-500">
                Nov 2026 – Mar 2027 Departures
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {winterTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
          </div>

          {/* Winter FAQ Accordion Section */}
          <div className="mt-20 pt-12 border-t border-slate-200 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
                Winter FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Winter Trekking FAQ & Preparation
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Crucial answers regarding snowfall timing, required gear, safety, and budgets.
              </p>
            </div>

            <FAQAccordion items={winterFaqs} />
          </div>
        </div>
      </div>
    </>
  );
};
