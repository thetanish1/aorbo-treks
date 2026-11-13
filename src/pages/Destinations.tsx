import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Chip } from '@/components/common/Chip';
import { Button } from '@/components/common/Button';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useStateGroups } from '@/hooks/useDestinations';

export const Destinations: React.FC = () => {
  const { data: stateGroups = [] } = useStateGroups();
  const [activeStateSlug, setActiveStateSlug] = useState<string>('andhra-pradesh');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Setup IntersectionObserver to highlight sticky chip for the currently active state section
  useEffect(() => {
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;
      for (const group of stateGroups) {
        const el = sectionRefs.current[group.slug];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStateSlug(group.slug);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, [stateGroups]);

  const scrollToState = (slug: string) => {
    setActiveStateSlug(slug);
    const element = document.getElementById(`state-section-${slug}`);
    if (element) {
      const yOffset = -140; // account for sticky header + sticky chip bar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const breadcrumbs = [{ label: 'Destinations' }];

  return (
    <>
      <SEO
        title="Trek and Trip Destinations Across India (70+ Places)"
        description="70 places and states with packages. Pick one to compare its packages across Himachal Pradesh, Uttarakhand, Karnataka, Jammu & Kashmir, and more."
        canonical="/destinations"
        schema={createBreadcrumbSchema([{ name: 'Destinations', item: '/destinations' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Page Header */}
          <div className="max-w-3xl mb-8">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Destinations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Trek and trip destinations
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              70 places and states with packages. Pick one to compare its packages from verified organisers across India.
            </p>
          </div>
        </div>

        {/* Sticky Anchor Chip Bar */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200/90 py-3 shadow-sm">
          <div className="max-w-container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                Jump to State:
              </span>
              {stateGroups.map((group) => {
                const isActive = activeStateSlug === group.slug;
                return (
                  <Chip
                    key={group.slug}
                    active={isActive}
                    onClick={() => scrollToState(group.slug)}
                    count={group.allCount}
                    className="shrink-0 cursor-pointer"
                  >
                    {group.state}
                  </Chip>
                );
              })}
            </div>
          </div>
        </div>

        {/* State Sections Grid */}
        <div className="max-w-container mx-auto px-4 sm:px-6 mt-12 space-y-16">
          {stateGroups.map((group) => (
            <section
              key={group.slug}
              id={`state-section-${group.slug}`}
              ref={(el) => (sectionRefs.current[group.slug] = el)}
              className="scroll-mt-36"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-100/80 flex items-center justify-center text-primary-800 font-bold">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                    {group.state}
                  </h2>
                </div>
                <span className="text-sm font-semibold text-slate-500">
                  {group.allCount} {group.allCount === 1 ? 'trek' : 'treks'} total
                </span>
              </div>

              {/* Responsive Link Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* First Item: All treks and trips in {State} */}
                <Link
                  to={`/destinations/${group.slug}`}
                  className="group bg-primary-700 text-white rounded-cardSm p-5 shadow-soft hover:bg-primary-800 hover:shadow-lift transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                      Statewide Collection
                    </span>
                    <h3 className="font-heading font-bold text-lg mt-1 group-hover:translate-x-0.5 transition-transform">
                      All treks & trips in {group.state}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                    <span>{group.allCount} Packages</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* Individual Places */}
                {group.places.map((place) => (
                  <Link
                    key={place.slug}
                    to={`/destinations/${place.slug}`}
                    className="group bg-white rounded-cardSm p-5 border border-slate-200/90 shadow-soft hover:border-primary-400 hover:shadow-lift transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-primary-700 transition-colors">
                          {place.name}
                        </h3>
                        <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-primary-50 group-hover:text-primary-700 shrink-0">
                          {place.count}
                        </span>
                      </div>
                      {place.description && (
                        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {place.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-primary-700 font-semibold group-hover:underline">
                      <span>Compare packages</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="max-w-container mx-auto px-4 sm:px-6 mt-20">
          <div className="bg-gradient-to-r from-emerald-900 to-primary-900 rounded-card p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                City Escapes
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                Looking for treks close to home?
              </h3>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                Discover weekend camping, sunrise hill climbs, and rainforest trails near Hyderabad, Bengaluru, Mumbai, Pune, and Delhi.
              </p>
            </div>

            <Link to="/treks-near" className="shrink-0">
              <Button variant="accent" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                See treks near your city
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
