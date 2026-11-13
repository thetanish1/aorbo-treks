export type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type TrekSeason = 'winter' | 'summer' | 'monsoon' | 'autumn' | 'spring' | 'all-year';

export type TrekDifficulty = 'Easy' | 'Moderate' | 'Hard';

export interface TrekItineraryDay {
  day: number;
  title: string;
  body: string;
  altitude?: string;
  distance?: string;
  stay?: string;
  meals?: string;
}

export interface TrekReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  verifiedBooking: boolean;
  city?: string;
}

export interface Trek {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  state: string;
  destinationSlug: string;
  destinationName: string;
  fromPrice: number;
  originalPrice?: number;
  durations: string[];
  weekdays: WeekDay[];
  images: string[];
  season?: TrekSeason[];
  organiserId: string;
  difficulty?: TrekDifficulty;
  itinerary?: TrekItineraryDay[];
  rating: number;
  reviewsCount: number;
  reviews?: TrekReview[];
  overview?: string;
  inclusions?: string[];
  exclusions?: string[];
  thingsToCarry?: string[];
  cancellationPolicy?: string[];
  altitude?: string;
  distance?: string;
  bestMonths?: string[];
  badge?: string;
  isPopular?: boolean;
  isWinterSpecial?: boolean;
}

export interface Destination {
  slug: string;
  name: string;
  state: string;
  count: number;
  isState: boolean;
  image?: string;
  description?: string;
}

export interface Organiser {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewsCount: number;
  treksCount: number;
  establishedYear: number;
  verified: boolean;
  description: string;
  badges: string[];
  phone?: string;
  email?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  category: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TrekFilters {
  destination?: string;
  state?: string;
  duration?: string;
  minPrice?: number;
  maxPrice?: number;
  month?: string;
  difficulty?: TrekDifficulty;
  season?: TrekSeason;
  weekday?: WeekDay;
  sortBy?: 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc' | 'rating-desc' | 'popular';
  search?: string;
}

