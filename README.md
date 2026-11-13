# TrekNest - Verified Trek & Trip Booking Marketplace (React + TypeScript)

> **"Compare verified treks across India and book in one place. Solo or group, trekking made simple."**  
> Based in Hyderabad, Telangana.

TrekNest is a production-quality, responsive trek and trip booking marketplace inspired by Aorbo Treks. The platform aggregates treks from verified organisers across India (Himalayas, Western Ghats, Eastern Ghats, Sahyadris) allowing users to compare prices, departure dates, durations, and book seamlessly with simulated checkout.

---

## 🌟 Key Features

1. **Sticky Global Navigation & Dark Modern Footer:**
   - Wordmark logo linking to `/`
   - Active route highlighting with primary color indicator
   - Full-height slide-in mobile navigation drawer with body scroll locking and Esc keyboard handling
   - 4-column rich dark footer (`#0B1F1E`) with links, Google Play CTA, and social channels

2. **Home Page with 10 Specialized Sections:**
   - **Hero:** Full-bleed image background with dark gradient, search bar with destination autocomplete, month selector, and quick chips (Winter treks, Weekend treks, Near me, Himachal, Uttarakhand, Karnataka)
   - **Trust Strip:** 4 icon cards (Verified organisers, 70+ destinations, Compare prices & dates, Secure booking)
   - **Popular Destinations:** Horizontally scrollable snap carousel
   - **Trending / Winter Treks:** Grid of `TrekCard` components with live departure badges
   - **How it Works:** 3-step numbered journey (Compare, Choose dates, Book)
   - **Why Book With Us:** Feature value proposition cards
   - **Trek Organisers:** Showcase of verified host operators
   - **Blogs Preview:** Latest trail guides with read time & author metadata
   - **App Download Banner:** Gradient showcase with mobile app mockup
   - **FAQ Accordion:** Animated height accordion with `schema.org/FAQPage` structured data

3. **Destinations Index (`/destinations`):**
   - 70 places & states with packages across 14 states (Andhra Pradesh, Goa, Himachal Pradesh, Jammu and Kashmir, Karnataka, Kerala, Maharashtra, Puducherry, Rajasthan, Sikkim, Tamil Nadu, Telangana, Uttar Pradesh, Uttarakhand)
   - **Sticky Anchor Chip Bar** with active state highlighting driven by scroll spy (`IntersectionObserver`)
   - Direct cards for "All treks and trips in {State}" plus individual place cards with counts

4. **Winter Treks Landing Page (`/winter-treks`):**
   - Curated for Winter 2026–27 (Nov–Mar season, prices from ₹1,150)
   - 15 snow trips (Auli, Kedarkantha, Manali, Shimla, Himachal Grand Circuit, Kashmir Winter, Shimla-Manali, Jammu-Kashmir, Sikkim-Gangtok, Chopta Tungnath, Gangtok Valley, Jannat-E-Kashmir, Dayara Bugyal, Sandakphu, Kashmir-Jammu-Amritsar)
   - Destination chip counter and winter-specific FAQ accordion

5. **Trek Detail Page (`/treks/:slug`):**
   - Hero image gallery with thumbnails & fullscreen lightbox modal
   - Duration options as selectable pill chips
   - Weekly departure day indicators
   - **Sticky Desktop Booking Card** with duration select, date select, traveller counter stepper, and dynamic price calculation
   - **Mobile Fixed Bottom Bar** for seamless on-the-go booking
   - Interactive 3-step Booking Modal (Traveller info, summary calculation, mock transaction confirmation)
   - Tabbed / Accordion sections: Overview, Day-by-day Itinerary with elevations & meals, Inclusions/Exclusions, Packing Checklist, Cancellation Policy, Organiser Profile, and Real Verified Reviews

6. **City-Near Treks (`/treks-near`):**
   - City search bar with quick chips (Hyderabad, Bengaluru, Mumbai, Pune, Delhi NCR, Kolkata, Chennai)

7. **Legal & Informational Pages (`/terms`, `/privacy-policy`, `/user-agreement`, `/refund-policy`):**
   - Reusable `LegalLayout` with sticky sidebar table of contents

---

## 🛠️ Tech Stack & Architecture

- **Build Tool:** Vite 5
- **Framework:** React 18 + TypeScript (strict mode enabled)
- **Routing:** React Router v6 (code-split route components via `React.lazy` and `Suspense`)
- **Styling:** Tailwind CSS with custom outdoor nature palette (`tailwind.config.ts`)
- **Animation:** Framer Motion (modal transitions, accordions, mobile drawers)
- **Data Fetching:** TanStack Query (React Query v5) with simulated async latency
- **Icons:** Lucide React
- **SEO & Structured Data:** `react-helmet-async` with OpenGraph, Twitter Cards, `BreadcrumbList`, and `FAQPage` JSON-LD

---

## 📁 Project Structure

```
aorbo-treks/
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── types/
│   │   └── trek.ts              # Core TypeScript interfaces (Trek, Destination, Organiser, etc.)
│   ├── data/
│   │   ├── destinations.ts       # 14 states and 70+ places seed dataset
│   │   ├── treks.ts              # 15 winter trips + iconic Indian treks
│   │   ├── organisers.ts         # Verified organizer credentials & badges
│   │   ├── blogs.ts              # Guides, gear advice & articles
│   │   └── faqs.ts               # General & winter trekking FAQs
│   ├── services/
│   │   └── api.ts                # Mock API layer returning Promises (ready for REST/Supabase)
│   ├── hooks/
│   │   ├── useTreks.ts           # React Query hooks for trek search, detail, winter, near-city
│   │   └── useDestinations.ts    # React Query hooks for destinations, organizers, blogs, FAQs
│   ├── lib/
│   │   └── utils.ts              # Class merging (clsx + twMerge), currency formatting, slugify
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx        # Accessible pill buttons (primary, accent, outline, ghost)
│   │   │   ├── Chip.tsx          # Pill chip for filters, destinations & badges
│   │   │   ├── Breadcrumbs.tsx   # Semantic breadcrumb trail with schema support
│   │   │   ├── SectionHeader.tsx # Eyebrow, H2, and optional View All link
│   │   │   ├── FAQAccordion.tsx  # Accessible accordion with animated height
│   │   │   ├── SEO.tsx           # Helmet wrapper with OpenGraph, Twitter & JSON-LD schemas
│   │   │   └── Skeleton.tsx      # Pulse placeholder skeletons
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky header with mobile drawer
│   │   │   ├── Footer.tsx        # 4-column dark footer
│   │   │   ├── Layout.tsx        # Master shell with ScrollToTop
│   │   │   └── LegalLayout.tsx   # Sticky TOC layout for legal documents
│   │   ├── trek/
│   │   │   ├── TrekCard.tsx      # 16:10 lazy image, departure pills, accent pricing
│   │   │   ├── FilterBar.tsx     # Duration, budget slider, month, sort filter
│   │   │   ├── BookingModal.tsx  # Multi-step checkout modal with mock payment
│   │   │   └── ReviewCard.tsx    # Verified trekker testimonial card
│   │   └── cards/
│   │       ├── DestinationCard.tsx # Image card with package count
│   │       ├── OrganiserCard.tsx   # Verified badges, rating, active package counts
│   │       └── BlogCard.tsx        # Article preview card
│   ├── pages/
│   │   ├── Home.tsx              # 10 home sections
│   │   ├── Destinations.tsx      # State index with sticky scroll spy
│   │   ├── DestinationDetail.tsx # Region search, filters, and packages
│   │   ├── WinterTreks.tsx       # 15 snow trips landing page
│   │   ├── TrekDetail.tsx        # Sticky booking card, itinerary, gallery & modal
│   │   ├── TreksNear.tsx         # City-based outdoor search
│   │   ├── Organisers.tsx        # Operator directory
│   │   ├── Blogs.tsx             # Articles directory with category filter
│   │   ├── BlogDetail.tsx        # Long-form article page
│   │   ├── About.tsx             # Company mission, team, and numbers
│   │   ├── Safety.tsx            # 4-pillar safety framework
│   │   ├── Contact.tsx           # Validated contact form & Hyderabad HQ
│   │   ├── AppPromo.tsx          # Mobile application download landing
│   │   ├── LegalPage.tsx         # Terms, Privacy, User Agreement, Refund
│   │   └── NotFound.tsx          # 404 trail page
│   ├── App.tsx                   # Lazy routes configuration
│   ├── main.tsx                  # QueryClientProvider & HelmetProvider entry
│   └── index.css                 # Tailwind directives, smooth scrolling
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview the production build locally
```bash
npm run preview
```

---

## 🔄 How to Swap Mock Data for a Real API (Supabase or REST)

All data calls are abstracted behind `src/services/api.ts` and return standard Promises. TanStack Query hooks in `src/hooks/` consume these functions without coupling to the mock data.

To connect to a live backend (such as Supabase or an Express/FastAPI REST API):

1. **Install your backend client** (e.g. `@supabase/supabase-js` or `axios`):
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Update `src/services/api.ts`**:
   Replace the in-memory array filtering with database queries:
   ```ts
   import { createClient } from '@supabase/supabase-js';
   import { Trek, TrekFilters } from '@/types/trek';

   const supabase = createClient(
     import.meta.env.VITE_SUPABASE_URL,
     import.meta.env.VITE_SUPABASE_ANON_KEY
   );

   export async function getTreks(filters?: TrekFilters): Promise<Trek[]> {
     let query = supabase.from('treks').select('*');

     if (filters?.destination) {
       query = query.eq('destinationSlug', filters.destination);
     }
     if (filters?.maxPrice) {
       query = query.lte('fromPrice', filters.maxPrice);
     }
     if (filters?.sortBy === 'price-asc') {
       query = query.order('fromPrice', { ascending: true });
     }

     const { data, error } = await query;
     if (error) throw error;
     return data as Trek[];
   }
   ```

Because components use `useTreks()`, `useTrek(slug)`, `useWinterTreks()`, no UI or page components need to be modified when swapping the data layer.

---

## 🏔️ Design System Defaults

- **Primary:** Forest / Teal Green (`#0F766E`, hover `#115E59`)
- **Accent:** Sunrise Orange (`#F97316`) for price callouts and CTAs
- **Dark Footer:** `#0B1F1E` with `#CBD5D1` text
- **Surfaces:** Clean white background (`#FFFFFF`) with soft section contrast (`#F6F8F7`)
- **Typography:** `Inter` for crisp body copy and `Poppins` for tight heading typography
- **Shapes & Radii:** 12–16px card radii, pill-shaped chips and buttons (`rounded-full`)
- **Shadows:** Soft ambient shadows (`shadow-soft`) with responsive hover lift (`shadow-lift`)

