import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Mountain,
  Maximize2,
  Info,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { ReviewCard } from '@/components/trek/ReviewCard';
import { BookingModal } from '@/components/trek/BookingModal';
import { TrekCard } from '@/components/trek/TrekCard';
import { OrganiserCard } from '@/components/cards/OrganiserCard';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useTrek, useTreks } from '@/hooks/useTreks';
import { useOrganiser } from '@/hooks/useDestinations';
import { formatPrice } from '@/lib/utils';

export const TrekDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { data: trek, isLoading } = useTrek(slug);
  const { data: organiser } = useOrganiser(trek?.organiserId || '');
  const { data: similarTreks = [] } = useTreks({ state: trek?.state });

  // UI state
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'gear' | 'cancellation' | 'reviews'>('overview');
  const [openItineraryDay, setOpenItineraryDay] = useState<number | null>(1);

  // Booking Card State
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('Upcoming Saturday');
  const [travellers, setTravellers] = useState<number>(1);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // Set default duration once trek is loaded
  React.useEffect(() => {
    if (trek?.durations?.[0] && !selectedDuration) {
      setSelectedDuration(trek.durations[0]);
    }
  }, [trek, selectedDuration]);

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-700" />
      </div>
    );
  }

  if (!trek) {
    return (
      <div className="min-h-screen py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Trek not found</h2>
        <Link to="/destinations" className="mt-4 inline-block text-primary-700 font-semibold underline">
          Browse all treks
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Destinations', href: '/destinations' },
    { label: trek.destinationName, href: `/destinations/${trek.destinationSlug}` },
    { label: trek.title },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'Inclusions & Exclusions' },
    { id: 'gear', label: 'Things to Carry' },
    { id: 'cancellation', label: 'Cancellation Policy' },
    { id: 'reviews', label: `Reviews (${trek.reviewsCount})` },
  ];

  const filteredSimilarTreks = similarTreks.filter((t) => t.id !== trek.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${trek.title} - ${trek.state}`}
        description={`${trek.subtitle || trek.overview?.slice(0, 150)} Book directly with verified organisers on TrekNest.`}
        canonical={`/treks/${trek.slug}`}
        ogImage={trek.images[0]}
        schema={createBreadcrumbSchema([
          { name: 'Destinations', item: '/destinations' },
          { name: trek.destinationName, item: `/destinations/${trek.destinationSlug}` },
          { name: trek.title, item: `/treks/${trek.slug}` },
        ])}
      />

      <div className="bg-surface-alt min-h-screen py-8 sm:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Title & Metadata Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800">
                <MapPin className="w-3 h-3 text-primary-700" />
                {trek.destinationName}, {trek.state}
              </span>
              {trek.badge && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  {trek.badge}
                </span>
              )}
              {trek.difficulty && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                  Difficulty: {trek.difficulty}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-content tracking-tight leading-tight">
              {trek.title}
            </h1>

            {trek.subtitle && (
              <p className="mt-2 text-sm sm:text-base text-content-muted max-w-3xl">
                {trek.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-900">{trek.rating.toFixed(1)}</span>
                <span className="text-slate-500">({trek.reviewsCount} reviews)</span>
              </div>
              {trek.altitude && (
                <div className="flex items-center gap-1">
                  <Mountain className="w-4 h-4 text-slate-400" />
                  <span>Max Altitude: <strong>{trek.altitude}</strong></span>
                </div>
              )}
              {trek.distance && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Total Distance: <strong>{trek.distance}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Image Gallery: Hero + Thumbnails + Lightbox */}
          <div className="mb-10 space-y-3">
            {/* Main Featured Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 shadow-md group">
              <img
                src={trek.images[selectedImageIndex] || trek.images[0]}
                alt={trek.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-900 transition-colors shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Thumbnail Row */}
            {trek.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {trek.images.map((img, idx) => (
                  <button
                    key={img + idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-24 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-primary-700 ring-2 ring-primary-700/20'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${trek.title} preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Lightbox Modal */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={trek.images[selectedImageIndex]}
                alt={trek.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Main Grid: Left Details & Right Sticky Booking Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Duration Options as Selectable Pills */}
              <div className="bg-white p-5 rounded-card border border-slate-200 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Select Available Duration
                </span>
                <div className="flex flex-wrap gap-2">
                  {trek.durations.map((d) => (
                    <Chip
                      key={d}
                      active={selectedDuration === d}
                      onClick={() => setSelectedDuration(d)}
                      variant="outline"
                      className="text-sm font-semibold py-2 px-4 cursor-pointer"
                    >
                      {d}
                    </Chip>
                  ))}
                </div>

                {/* Weekday Availability */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-medium">Regular weekly departures on:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {trek.weekdays.map((w) => (
                      <span
                        key={w}
                        className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3 px-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary-700 text-primary-700'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                      Trek Overview
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {trek.overview || 'Experience the raw beauty of Indian outdoors. Certified guides, local mountain meals, and carefully curated trails guarantee a memorable adventure.'}
                    </p>
                  </div>

                  {trek.bestMonths && (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary-700 shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-800">Best Season to Visit:</strong>{' '}
                        <span className="text-slate-600">{trek.bestMonths.join(', ')}</span>
                      </div>
                    </div>
                  )}

                  {organiser && (
                    <div className="pt-6 border-t border-slate-100">
                      <h4 className="font-heading font-bold text-base text-slate-900 mb-4">
                        Lead Trek Organiser
                      </h4>
                      <OrganiserCard organiser={organiser} />
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Day-by-Day Itinerary Accordion */}
              {activeTab === 'itinerary' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-bold text-xl text-slate-900">
                      Detailed Route & Schedule
                    </h3>
                    <span className="text-xs text-slate-500">
                      {trek.itinerary?.length || 0} Days
                    </span>
                  </div>

                  {trek.itinerary && trek.itinerary.length > 0 ? (
                    <div className="space-y-4">
                      {trek.itinerary.map((day) => {
                        const isOpen = openItineraryDay === day.day;
                        return (
                          <div
                            key={day.day}
                            className="border border-slate-200 rounded-xl overflow-hidden"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenItineraryDay(isOpen ? null : day.day)}
                              className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 text-left transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                                  D{day.day}
                                </span>
                                <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                                  {day.title}
                                </span>
                              </div>
                              <ChevronDown
                                className={`w-4 h-4 text-slate-500 transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 border-t border-slate-200 space-y-3 bg-white">
                                <p className="leading-relaxed">{day.body}</p>
                                <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-500 border-t border-slate-100">
                                  {day.altitude && (
                                    <span>Altitude: <strong className="text-slate-700">{day.altitude}</strong></span>
                                  )}
                                  {day.distance && (
                                    <span>Distance: <strong className="text-slate-700">{day.distance}</strong></span>
                                  )}
                                  {day.stay && (
                                    <span>Stay: <strong className="text-slate-700">{day.stay}</strong></span>
                                  )}
                                  {day.meals && (
                                    <span>Meals: <strong className="text-slate-700">{day.meals}</strong></span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm">
                      Standard package itinerary is provided by the organiser upon booking confirmation.
                    </p>
                  )}
                </div>
              )}

              {/* Tab 3: Inclusions / Exclusions */}
              {activeTab === 'inclusions' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-emerald-800 flex items-center gap-2 mb-4">
                      <Check className="w-5 h-5 text-emerald-600" />
                      What's Included
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {trek.inclusions?.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      )) || (
                        <li>All basic lodging, food and guide fees included.</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-red-800 flex items-center gap-2 mb-4">
                      <X className="w-5 h-5 text-red-600" />
                      What's Not Included
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {trek.exclusions?.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      )) || (
                        <li>Personal travel to basecamp and porter offloading.</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 4: Things to carry */}
              {activeTab === 'gear' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Mandatory Things to Pack
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Pack smart and light. Avoid heavy cotton jeans and bring proper synthetic or woollen layers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {trek.thingsToCarry?.map((gear, i) => (
                      <div
                        key={i}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        <span>{gear}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Cancellation Policy */}
              {activeTab === 'cancellation' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Cancellation & Rescheduling Terms
                  </h3>
                  <div className="space-y-3">
                    {trek.cancellationPolicy?.map((policy, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                      >
                        <Info className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                        <span>{policy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 6: Reviews */}
              {activeTab === 'reviews' && (
                <div className="bg-white p-6 sm:p-8 rounded-card border border-slate-200 shadow-soft space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900">
                        Verified Trekker Reviews
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Authentic feedback from real participants on TrekNest
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-sm text-slate-900">{trek.rating} / 5</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {trek.reviews && trek.reviews.length > 0 ? (
                      trek.reviews.map((rev) => <ReviewCard key={rev.id} review={rev} />)
                    ) : (
                      <p className="text-slate-500 text-sm">
                        No reviews yet for this departure season. Be the first to share your experience!
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Similar Treks */}
              {filteredSimilarTreks.length > 0 && (
                <div className="pt-10">
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                    Similar Treks in {trek.state}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredSimilarTreks.map((t) => (
                      <TrekCard key={t.id} trek={t} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Booking Card (Desktop) (4 cols) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-card p-6 border border-slate-200 shadow-soft space-y-5">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading font-extrabold text-3xl text-accent">
                      {formatPrice(trek.fromPrice)}
                    </span>
                    <span className="text-xs text-slate-500 font-normal">per person*</span>
                  </div>
                  {trek.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      Regular: {formatPrice(trek.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Duration select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-700"
                  >
                    {trek.durations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Picker / Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Departure Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-700"
                  >
                    <option value="Upcoming Saturday">Upcoming Saturday (Confirmed Batch)</option>
                    <option value="Upcoming Wednesday">Upcoming Wednesday (Midweek Special)</option>
                    <option value="Next Weekend">Next Weekend (Filling Fast)</option>
                    <option value="Custom Dates (Group)">Custom Dates (Private Group)</option>
                  </select>
                </div>

                {/* Travellers Stepper */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Travellers
                  </label>
                  <div className="flex items-center justify-between border border-slate-200 rounded-xl p-2 bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setTravellers((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-heading font-bold text-sm text-slate-900">
                      {travellers} {travellers === 1 ? 'Person' : 'People'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravellers((prev) => prev + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total estimate */}
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600">Estimated Total:</span>
                  <span className="text-accent text-lg font-heading">
                    {formatPrice(trek.fromPrice * travellers)}
                  </span>
                </div>

                {/* Book Now Button */}
                <Button
                  variant="accent"
                  fullWidth
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </Button>

                <div className="text-center text-[11px] text-slate-400 space-y-1">
                  <p>✓ Instant confirmation • Verified organiser</p>
                  <p>✓ 100% Secure demo booking flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Booking Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-4 shadow-2xl flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-500 uppercase block">Starting from</span>
            <span className="text-xl font-extrabold text-accent font-heading">
              {formatPrice(trek.fromPrice)}
            </span>
          </div>

          <Button
            variant="accent"
            size="md"
            onClick={() => setIsBookingModalOpen(true)}
            className="px-6"
          >
            Book Now
          </Button>
        </div>

        {/* Booking Modal */}
        <BookingModal
          trek={trek}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          selectedDuration={selectedDuration}
          selectedDate={selectedDate}
          travellers={travellers}
        />
      </div>
    </>
  );
};
