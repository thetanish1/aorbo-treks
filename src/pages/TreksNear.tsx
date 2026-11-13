import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { TrekCard } from '@/components/trek/TrekCard';
import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useTreksNear } from '@/hooks/useTreks';

const POPULAR_CITIES = [
  'Hyderabad',
  'Bengaluru',
  'Mumbai',
  'Pune',
  'Delhi NCR',
  'Kolkata',
  'Chennai',
];

export const TreksNear: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCity = searchParams.get('city') || 'Hyderabad';
  const [cityInput, setCityInput] = useState(initialCity);
  const [selectedCity, setSelectedCity] = useState(initialCity);

  const { data: nearbyTreks = [] } = useTreksNear(selectedCity);

  const handleCitySelect = (city: string) => {
    setCityInput(city);
    setSelectedCity(city);
    setSearchParams({ city });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityInput.trim()) {
      setSelectedCity(cityInput.trim());
      setSearchParams({ city: cityInput.trim() });
    }
  };

  const breadcrumbs = [
    { label: 'Destinations', href: '/destinations' },
    { label: `Treks Near ${selectedCity}` },
  ];

  return (
    <>
      <SEO
        title={`Treks and Weekend Trips Near ${selectedCity}`}
        description={`Explore verified weekend treks, camping, and scenic escapes within easy reach of ${selectedCity}. Direct aggregator booking on TrekNest.`}
        canonical={`/treks-near?city=${encodeURIComponent(selectedCity)}`}
        schema={createBreadcrumbSchema([
          { name: 'Destinations', item: '/destinations' },
          { name: `Treks Near ${selectedCity}`, item: `/treks-near?city=${encodeURIComponent(selectedCity)}` },
        ])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="max-w-3xl mb-8">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              Local Escapes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Treks near your city
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              Find quick weekend getaways, overnight camps, and scenic hikes departing from or located right around your city.
            </p>
          </div>

          {/* City Search Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-card border border-slate-200 shadow-soft mb-10">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <MapPin className="w-5 h-5 text-primary-700 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="Enter your city (e.g. Hyderabad, Bengaluru, Pune, Delhi)"
                  className="w-full pl-11 pr-4 py-3 text-sm sm:text-base border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-700 font-medium"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="md"
                className="w-full sm:w-auto shrink-0 py-3 px-6"
                leftIcon={<Search className="w-4 h-4" />}
              >
                Search nearby
              </Button>
            </form>

            {/* Popular City Chips */}
            <div className="flex items-center gap-2 flex-wrap mt-4 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Popular hubs:
              </span>
              {POPULAR_CITIES.map((city) => (
                <Chip
                  key={city}
                  active={selectedCity.toLowerCase() === city.toLowerCase()}
                  onClick={() => handleCitySelect(city)}
                  variant="outline"
                  className="cursor-pointer"
                >
                  {city}
                </Chip>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Recommended for travellers from {selectedCity} ({nearbyTreks.length} options)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {nearbyTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
