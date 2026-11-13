import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { FilterBar } from '@/components/trek/FilterBar';
import { TrekCard } from '@/components/trek/TrekCard';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { Button } from '@/components/common/Button';
import { SEO, createBreadcrumbSchema, createFaqSchema } from '@/components/common/SEO';
import { useDestination, useGeneralFaqs } from '@/hooks/useDestinations';
import { useTreks } from '@/hooks/useTreks';
import { TrekFilters } from '@/types/trek';

export const DestinationDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { data: destData } = useDestination(slug);
  const { data: generalFaqs = [] } = useGeneralFaqs();

  const [filters, setFilters] = useState<TrekFilters>({
    destination: slug,
    sortBy: 'popular',
  });

  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Fetch treks using the filters
  const { data: allTreks = [] } = useTreks({
    ...filters,
    destination: slug,
  });

  const destination = destData?.destination;
  const stateGroup = destData?.stateGroup;

  const title = destination
    ? `Treks and trips in ${destination.name}`
    : `Treks in ${slug.replace(/-/g, ' ')}`;

  const relatedPlaces = stateGroup?.places.filter((p) => p.slug !== slug) || [];

  const handleResetFilters = () => {
    setFilters({ destination: slug, sortBy: 'popular' });
  };

  const breadcrumbs = [
    { label: 'Destinations', href: '/destinations' },
    { label: destination?.name || slug },
  ];

  return (
    <>
      <SEO
        title={title}
        description={`Compare verified treks and trips in ${destination?.name || slug}, ${destination?.state || 'India'}. Browse prices, itineraries, and dates from verified organizers.`}
        canonical={`/destinations/${slug}`}
        schema={[
          createBreadcrumbSchema([
            { name: 'Destinations', item: '/destinations' },
            { name: destination?.name || slug, item: `/destinations/${slug}` },
          ]),
          createFaqSchema(generalFaqs.slice(0, 3)),
        ]}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Heading Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full w-fit mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination?.state || 'Verified Destination'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-content tracking-tight">
              {title}
            </h1>
            {destination?.description && (
              <p className="mt-3 text-base text-content-muted max-w-3xl leading-relaxed">
                {destination.description}
              </p>
            )}
          </div>

          {/* Filter Bar */}
          <FilterBar
            filters={filters}
            onChange={(newFilters) => setFilters(newFilters)}
            onReset={handleResetFilters}
            totalResults={allTreks.length}
          />

          {/* Treks Grid */}
          {allTreks.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {allTreks.slice(0, visibleCount).map((trek) => (
                  <TrekCard key={trek.id} trek={trek} />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < allTreks.length && (
                <div className="mt-12 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                  >
                    Load more packages ({allTreks.length - visibleCount} remaining)
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-card p-12 text-center border border-slate-200">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-xl text-slate-800">
                No treks found matching your filter criteria
              </h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Try widening your price range or clearing duration/month filters to see all available packages.
              </p>
              <div className="mt-5">
                <Button variant="primary" size="sm" onClick={handleResetFilters}>
                  Clear all filters
                </Button>
              </div>
            </div>
          )}

          {/* Related Destinations in State */}
          {relatedPlaces.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Other destinations in {stateGroup?.state}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Explore more trails and mountain circuits in this region
                  </p>
                </div>
                <Link
                  to="/destinations"
                  className="text-xs sm:text-sm font-semibold text-primary-700 hover:underline"
                >
                  All states →
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {relatedPlaces.slice(0, 8).map((place) => (
                  <Link
                    key={place.slug}
                    to={`/destinations/${place.slug}`}
                    className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-soft hover:border-primary-400 hover:shadow-lift transition-all text-left flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                        {place.name}
                      </h4>
                      <span className="text-xs text-slate-500">
                        {place.count} packages
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary-700 mt-3 inline-flex items-center gap-1">
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Destination FAQ Accordion */}
          <div className="mt-20 pt-12 border-t border-slate-200 max-w-3xl">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
              Frequently Asked Questions for {destination?.name || 'this Destination'}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Essential tips on best travel seasons, gear requirements, and booking safety.
            </p>
            <FAQAccordion items={generalFaqs.slice(0, 4)} />
          </div>
        </div>
      </div>
    </>
  );
};
