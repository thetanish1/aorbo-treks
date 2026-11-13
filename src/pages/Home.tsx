import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  ShieldCheck,
  MapPin,
  Users,
  Award,
  Sparkles,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { SEO, createFaqSchema } from '@/components/common/SEO';
import { TrekCard } from '@/components/trek/TrekCard';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { OrganiserCard } from '@/components/cards/OrganiserCard';
import { ReviewsMarquee } from '@/components/common/ReviewsMarquee';
import { useWinterTreks } from '@/hooks/useTreks';
import {
  usePopularDestinations,
  useOrganisers,
  useGeneralFaqs,
} from '@/hooks/useDestinations';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchDestination, setSearchDestination] = useState('');
  const [searchMonth, setSearchMonth] = useState('All Months');
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

  const { data: popularDestinations = [] } = usePopularDestinations();
  const { data: winterTreks = [] } = useWinterTreks();
  const { data: organisers = [] } = useOrganisers();
  const { data: faqs = [] } = useGeneralFaqs();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (searchDestination) queryParams.set('destination', searchDestination);
    if (searchMonth && searchMonth !== 'All Months') queryParams.set('month', searchMonth);
    navigate(`/destinations?${queryParams.toString()}`);
  };

  const quickChips = [
    { label: '❄️ Winter treks', href: '/winter-treks', highlight: true },
    { label: '⛷️ Auli Snow & Skiing', href: '/treks/auli-snow-trek', highlight: true },
    { label: 'Weekend treks', href: '/treks-near' },
    { label: 'Near me (Hyderabad)', href: '/treks-near?city=hyderabad' },
    { label: 'Himachal', href: '/destinations/himachal-pradesh' },
    { label: 'Uttarakhand', href: '/destinations/uttarakhand' },
    { label: 'Karnataka', href: '/destinations/karnataka' },
  ];

  const destinationSuggestions = [
    'Auli Snow & Skiing Trek',
    'Kedarkantha',
    'Auli',
    'Manali',
    'Gokarna',
    'Chopta',
    'Coorg',
    'Gulmarg',
    'Himachal Pradesh',
    'Uttarakhand',
  ];

  const filteredSuggestions = searchDestination
    ? destinationSuggestions.filter((d) =>
        d.toLowerCase().includes(searchDestination.toLowerCase())
      )
    : destinationSuggestions;

  return (
    <>
      <SEO
        title="Book Verified Treks Across India"
        description="Compare verified treks across India and book in one place. Solo or group, trekking made simple. Explore winter treks, Himalayan expeditions, and Western Ghats adventures."
        canonical="/"
        schema={createFaqSchema(faqs)}
      />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center bg-slate-900 text-white overflow-hidden py-16 sm:py-24">
        {/* Full-width background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Majestic snow-capped mountain range under alpine sky"
            className="w-full h-full object-cover object-center brightness-75 scale-105 transform animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-emerald-300 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>India’s Dedicated Trek Marketplace • Based in Hyderabad</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight sm:leading-none text-white drop-shadow-sm">
              Book verified treks <span className="text-emerald-400">across India</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Compare verified treks across India and book in one place. Solo or group, trekking made simple.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-3xl mt-8 sm:mt-10"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-2xl border border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 text-slate-800"
            >
              {/* Destination Input with Autocomplete */}
              <div className="relative flex-1 flex items-center px-3.5 py-2 sm:py-0">
                <MapPin className="w-5 h-5 text-primary-700 shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchDestination}
                  onChange={(e) => {
                    setSearchDestination(e.target.value);
                    setIsAutocompleteOpen(true);
                  }}
                  onFocus={() => setIsAutocompleteOpen(true)}
                  placeholder="Where to? (e.g. Kedarkantha, Manali, Gokarna)"
                  className="w-full text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                />

                {/* Autocomplete Dropdown */}
                {isAutocompleteOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-20"
                      onClick={() => setIsAutocompleteOpen(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-30 text-left max-h-60 overflow-y-auto">
                      <div className="px-3.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Suggested Destinations
                      </div>
                      {filteredSuggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSearchDestination(item);
                            setIsAutocompleteOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                        >
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Month Selector */}
              <div className="flex items-center px-3.5 py-2 sm:py-0 border-t sm:border-t-0 sm:border-l border-slate-200">
                <Calendar className="w-5 h-5 text-slate-400 shrink-0 mr-2" />
                <select
                  value={searchMonth}
                  onChange={(e) => setSearchMonth(e.target.value)}
                  className="text-sm sm:text-base font-medium text-slate-700 bg-transparent focus:outline-none cursor-pointer pr-4"
                >
                  <option value="All Months">Any Month</option>
                  <option value="Dec">December 2026</option>
                  <option value="Jan">January 2027</option>
                  <option value="Feb">February 2027</option>
                  <option value="Mar">March 2027</option>
                  <option value="Apr">April 2027</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                variant="accent"
                size="md"
                type="submit"
                className="rounded-xl sm:rounded-full shrink-0 py-3 sm:py-3.5 px-7"
                leftIcon={<Search className="w-4 h-4" />}
              >
                Search treks
              </Button>
            </form>

            {/* Quick Chips below Hero */}
            <div className="flex items-center justify-center flex-wrap gap-2 mt-5">
              <span className="text-xs text-slate-300 font-medium mr-1 hidden sm:inline">
                Quick picks:
              </span>
              {quickChips.map((chip) => (
                <Link key={chip.label} to={chip.href}>
                  <Chip
                    variant={chip.highlight ? 'accent' : 'outline'}
                    className={
                      chip.highlight
                        ? 'bg-accent/90 text-white border-transparent hover:bg-accent'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white'
                    }
                  >
                    {chip.label}
                  </Chip>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: TRUST STRIP --- */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-8">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-primary-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  Verified Organisers
                </h4>
                <p className="text-xs text-content-muted mt-0.5">
                  100% background & safety vetted
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-primary-700 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  70+ Destinations
                </h4>
                <p className="text-xs text-content-muted mt-0.5">
                  Himalayas to Western Ghats
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-primary-700 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  Compare Prices & Dates
                </h4>
                <p className="text-xs text-content-muted mt-0.5">
                  Direct aggregator pricing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-primary-700 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  Secure Booking
                </h4>
                <p className="text-xs text-content-muted mt-0.5">
                  Instant confirmation & vouchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: POPULAR DESTINATIONS (CAROUSEL) --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Explore India"
            title="Popular Trek Destinations"
            subtitle="Handpicked gateways offering breathtaking ridges, alpine valleys, and coastal trails."
            viewAllLink="/destinations"
            viewAllText="View all 70+ destinations"
          />

          {/* Horizontally Scrollable Carousel */}
          <div className="flex items-center gap-5 overflow-x-auto pt-3 pb-6 scrollbar-none snap-x snap-mandatory">
            {popularDestinations.map((dest, index) => (
              <motion.div
                key={dest.slug}
                className="snap-start flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TRENDING / WINTER TREKS --- */}
      <section className="py-16 sm:py-24 bg-surface-alt border-t border-slate-200/70">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Winter 2026–27 Special"
            title="Trending Snow Treks & Winter Trips"
            subtitle="Pristine powder slopes, frozen lakes, and sunrise summits across Uttarakhand, Himachal, Kashmir, and Sikkim."
            viewAllLink="/winter-treks"
            viewAllText="View all 15 winter snow trips"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {winterTreks.slice(0, 6).map((trek, index) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <TrekCard trek={trek} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/winter-treks">
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore all winter snow treks (from ₹1,150)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: HOW IT WORKS --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            align="center"
            eyebrow="Simple 3-Step Process"
            title="How TrekNest Works"
            subtitle="We cut out the middlemen and endless WhatsApp coordination. Book your next adventure in minutes."
          />

          <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            {/* Connecting Line (desktop) */}
            <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-dashed border-t-2 border-slate-200 -z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-700 text-white font-heading font-extrabold text-2xl flex items-center justify-center shadow-lg mb-5">
                1
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                Compare Treks
              </h3>
              <p className="text-sm text-content-muted leading-relaxed max-w-xs">
                Browse itineraries, verified organiser profiles, past reviews, and transparent pricing in one catalog.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-accent text-white font-heading font-extrabold text-2xl flex items-center justify-center shadow-lg mb-5">
                2
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                Choose Dates & Group
              </h3>
              <p className="text-sm text-content-muted leading-relaxed max-w-xs">
                Pick your preferred weekday or weekend departure date. Travel solo or assemble your crew.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-emerald-300 font-heading font-extrabold text-2xl flex items-center justify-center shadow-lg mb-5">
                3
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                Book Seamlessly
              </h3>
              <p className="text-sm text-content-muted leading-relaxed max-w-xs">
                Confirm your booking instantly with safe checkout, equipment checklists, and WhatsApp updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: WHY BOOK WITH US --- */}
      <section className="py-16 sm:py-24 bg-surface-alt border-y border-slate-200/80">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="TrekNest Advantage"
            title="Why Adventurers Book With Us"
            subtitle="Built by mountaineers and travellers who understand the challenges of outdoor planning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Verified Organisers
              </h3>
              <p className="text-sm text-content-muted leading-relaxed">
                We stringently inspect IMF/NIM leader certifications, gear safety standards, and local permits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-accent flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-sm text-content-muted leading-relaxed">
                Zero hidden charges. Complete breakdown of meals, tenting, forest passes, and local transport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Flexible Group Sizes
              </h3>
              <p className="text-sm text-content-muted leading-relaxed">
                Whether you’re solo looking for kindred spirits or a private corporate group, we have packages tailored for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Safety & Medical First
              </h3>
              <p className="text-sm text-content-muted leading-relaxed">
                Mandatory pulse oximeter monitoring, emergency oxygen cylinders, and partner mountain evacuation plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: TREK ORGANISERS --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Certified Partners"
            title="Meet Our Verified Trek Organisers"
            subtitle="We partner only with operators who share our commitment to trekker safety, eco-responsibility, and warm local hospitality."
            viewAllLink="/organisers"
            viewAllText="View all organisers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {organisers.slice(0, 3).map((org) => (
              <OrganiserCard key={org.id} organiser={org} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: CUSTOMER REVIEWS (CONTINUOUS VERTICAL SCROLL) --- */}
      <section className="py-16 sm:py-24 bg-surface-alt border-t border-slate-200/80">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionHeader
            align="center"
            eyebrow="Trekker Stories"
            title="Real Trekkers, Real Adventures"
            subtitle="Verified reviews from adventurers who booked and enjoyed trips with certified operators on TrekNest."
          />

          <ReviewsMarquee />
        </div>
      </section>

      {/* --- SECTION 9: APP DOWNLOAD BANNER --- */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-950 text-white overflow-hidden relative">
        <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile App Experience
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                Trek booking made simple.{' '}
                <span className="text-emerald-400">Right on your phone.</span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Download the TrekNest mobile app for real-time trek availability, offline trail notes, direct organizer chat, and exclusive mobile-only discounts.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/app"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-lg group"
                >
                  <svg className="w-6 h-6 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.573V3.427c0-.648.225-1.24.609-1.613zM14.922 13.129l2.766-2.766L4.767 2.928a2.38 2.38 0 0 1 .843-.162c.504 0 .999.153 1.422.423l12.428 7.078-4.538 2.862zm0-2.258l4.538 2.862-12.428 7.078a2.808 2.808 0 0 1-1.422.423c-.3 0-.594-.054-.843-.162l12.921-7.435-2.766-2.766zm1.129 1.129l3.585-2.261a1.97 1.97 0 0 1 1.954-.038c.612.351.99.999.99 1.706 0 .707-.378 1.355-.99 1.706l-3.585-2.261a1.328 1.328 0 0 1-.364-.325l-.014-.027.424-.5z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">GET IT ON</span>
                    <span className="text-sm font-extrabold tracking-wide">Google Play</span>
                  </div>
                </Link>

                <Link to="/app" className="text-sm font-semibold text-emerald-300 hover:text-white transition-colors">
                  Learn more about features →
                </Link>
              </div>
            </div>

            {/* Phone Mockup Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 bg-slate-900 rounded-[38px] p-3 shadow-2xl border-4 border-slate-700/80">
                <div className="w-full bg-slate-950 rounded-[30px] p-5 text-white overflow-hidden space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2 bg-emerald-400 rounded-sm" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold">Upcoming Trip</span>
                    <h4 className="font-heading font-bold text-base mt-1 text-white">Kedarkantha Summit</h4>
                    <p className="text-xs text-slate-400">Departing this Saturday</p>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Organiser:</span>
                      <span className="font-semibold text-emerald-300">Altitude India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Temperature:</span>
                      <span className="font-semibold text-white">-4°C (Clear skies)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Trekker Pass:</span>
                      <span className="font-mono text-amber-300 font-bold">TN-582914</span>
                    </div>
                  </div>

                  <div className="w-full py-2.5 bg-accent rounded-xl text-center text-xs font-bold text-white shadow-md">
                    Open Packing Checklist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: FAQ ACCORDION --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            align="center"
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about comparing, booking, and trekking with TrekNest."
          />

          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
};
