import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { OrganiserCard } from '@/components/cards/OrganiserCard';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useOrganisers } from '@/hooks/useDestinations';

export const Organisers: React.FC = () => {
  const { data: organisers = [] } = useOrganisers();

  const breadcrumbs = [{ label: 'Verified Trek Organisers' }];

  return (
    <>
      <SEO
        title="Verified Trek Organisers Across India"
        description="Meet the verified, licensed adventure operators featured on TrekNest. Background checks, IMF certified leads, and transparent trek reviews."
        canonical="/organisers"
        schema={createBreadcrumbSchema([{ name: 'Organisers', item: '/organisers' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Certified Network
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Verified Trek Organisers
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              We aggregate only operators who adhere to strict safety guidelines, certified mountain leadership, and sustainable trail principles.
            </p>
          </div>

          {/* Organiser Trust Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <ShieldCheck className="w-8 h-8 text-primary-700 mb-3" />
              <h3 className="font-heading font-bold text-lg text-slate-900">5-Point Verification</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every operator's license, insurance, guide certifications, and safety gear are manually audited.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <Award className="w-8 h-8 text-primary-700 mb-3" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Certified Mountaineers</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Trek leads hold advanced certifications from IMF, NIM Uttarkashi, or HMI Darjeeling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <Users className="w-8 h-8 text-primary-700 mb-3" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Community Feedback</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Only verified trek participants can submit reviews, keeping ratings 100% honest and transparent.
              </p>
            </div>
          </div>

          {/* Organisers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {organisers.map((org) => (
              <OrganiserCard key={org.id} organiser={org} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
