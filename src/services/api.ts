import { Trek, Destination, Organiser, TrekFilters, BlogPost, FAQItem } from '@/types/trek';
import { TREKS } from '@/data/treks';
import { STATE_GROUPS, POPULAR_DESTINATIONS } from '@/data/destinations';
import { ORGANISERS } from '@/data/organisers';
import { BLOGS } from '@/data/blogs';
import { GENERAL_FAQS, WINTER_FAQS } from '@/data/faqs';

const SIMULATED_LATENCY_MS = 180;

function wait<T>(data: T, delay = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

export async function getTreks(filters?: TrekFilters): Promise<Trek[]> {
  let results = [...TREKS];

  if (!filters) {
    return wait(results);
  }

  if (filters.search) {
    const q = filters.search.toLowerCase().trim();
    results = results.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.state.toLowerCase().includes(q) ||
        t.destinationName.toLowerCase().includes(q) ||
        t.destinationSlug.toLowerCase().includes(q)
    );
  }

  if (filters.destination) {
    const dest = filters.destination.toLowerCase();
    results = results.filter(
      (t) =>
        t.destinationSlug.toLowerCase() === dest ||
        t.state.toLowerCase().replace(/\s+/g, '-') === dest ||
        t.title.toLowerCase().includes(dest)
    );
  }

  if (filters.state) {
    const s = filters.state.toLowerCase();
    results = results.filter((t) => t.state.toLowerCase() === s);
  }

  if (filters.minPrice !== undefined) {
    results = results.filter((t) => t.fromPrice >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    results = results.filter((t) => t.fromPrice <= filters.maxPrice!);
  }

  if (filters.difficulty) {
    results = results.filter((t) => t.difficulty === filters.difficulty);
  }

  if (filters.season) {
    results = results.filter((t) => t.season?.includes(filters.season!));
  }

  if (filters.duration) {
    const dQuery = filters.duration.toLowerCase();
    results = results.filter((t) =>
      t.durations.some((d) => d.toLowerCase().includes(dQuery))
    );
  }

  if (filters.weekday) {
    results = results.filter((t) => t.weekdays.includes(filters.weekday!));
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-asc':
        results.sort((a, b) => a.fromPrice - b.fromPrice);
        break;
      case 'price-desc':
        results.sort((a, b) => b.fromPrice - a.fromPrice);
        break;
      case 'rating-desc':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        results.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
    }
  }

  return wait(results);
}

export async function getTrek(slug: string): Promise<Trek | null> {
  const trek = TREKS.find((t) => t.slug === slug || t.id === slug);
  return wait(trek || null);
}

export async function getWinterTreks(): Promise<Trek[]> {
  const winterList = TREKS.filter((t) => t.isWinterSpecial || t.season?.includes('winter'));
  return wait(winterList);
}

export async function getDestinations(): Promise<Destination[]> {
  const allPlaces: Destination[] = [];
  STATE_GROUPS.forEach((group) => {
    allPlaces.push({
      slug: group.slug,
      name: `All in ${group.state}`,
      state: group.state,
      count: group.allCount,
      isState: true,
    });
    group.places.forEach((p) => allPlaces.push(p));
  });
  return wait(allPlaces);
}

export async function getDestinationBySlug(slug: string): Promise<{
  destination: Destination | null;
  stateGroup?: typeof STATE_GROUPS[0];
}> {
  // Check if state
  const stateMatch = STATE_GROUPS.find((g) => g.slug === slug);
  if (stateMatch) {
    return wait({
      destination: {
        slug: stateMatch.slug,
        name: stateMatch.state,
        state: stateMatch.state,
        count: stateMatch.allCount,
        isState: true,
      },
      stateGroup: stateMatch,
    });
  }

  // Check if place
  for (const group of STATE_GROUPS) {
    const placeMatch = group.places.find((p) => p.slug === slug);
    if (placeMatch) {
      return wait({
        destination: placeMatch,
        stateGroup: group,
      });
    }
  }

  return wait({ destination: null });
}

export async function getPopularDestinations(): Promise<Destination[]> {
  return wait(POPULAR_DESTINATIONS);
}

export async function getStateGroups() {
  return wait(STATE_GROUPS);
}

export async function getOrganisers(): Promise<Organiser[]> {
  return wait(ORGANISERS);
}

export async function getOrganiser(id: string): Promise<Organiser | null> {
  const org = ORGANISERS.find((o) => o.id === id);
  return wait(org || null);
}

export async function getBlogs(): Promise<BlogPost[]> {
  return wait(BLOGS);
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  const post = BLOGS.find((b) => b.slug === slug);
  return wait(post || null);
}

export async function getGeneralFaqs(): Promise<FAQItem[]> {
  return wait(GENERAL_FAQS);
}

export async function getWinterFaqs(): Promise<FAQItem[]> {
  return wait(WINTER_FAQS);
}

export async function getTreksNearCity(city: string): Promise<Trek[]> {
  const c = city.toLowerCase().trim();
  let matches: Trek[] = [];

  if (c.includes('hyderabad') || c.includes('telangana')) {
    matches = TREKS.filter((t) => t.state === 'Telangana' || t.state === 'Andhra Pradesh' || t.destinationSlug === 'gokarna');
  } else if (c.includes('bangalore') || c.includes('bengaluru') || c.includes('karnataka')) {
    matches = TREKS.filter((t) => t.state === 'Karnataka' || t.state === 'Kerala');
  } else if (c.includes('mumbai') || c.includes('pune') || c.includes('maharashtra')) {
    matches = TREKS.filter((t) => t.state === 'Maharashtra' || t.state === 'Goa');
  } else if (c.includes('delhi') || c.includes('chandigarh') || c.includes('dehradun')) {
    matches = TREKS.filter((t) => t.state === 'Uttarakhand' || t.state === 'Himachal Pradesh');
  } else if (c.includes('kolkata') || c.includes('siliguri')) {
    matches = TREKS.filter((t) => t.state === 'West Bengal' || t.state === 'Sikkim');
  } else {
    matches = TREKS.slice(0, 6);
  }

  return wait(matches);
}

