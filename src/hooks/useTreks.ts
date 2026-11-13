import { useQuery } from '@tanstack/react-query';
import { getTreks, getTrek, getWinterTreks, getTreksNearCity } from '@/services/api';
import { TrekFilters } from '@/types/trek';

export function useTreks(filters?: TrekFilters) {
  return useQuery({
    queryKey: ['treks', filters],
    queryFn: () => getTreks(filters),
  });
}

export function useTrek(slug: string) {
  return useQuery({
    queryKey: ['trek', slug],
    queryFn: () => getTrek(slug),
    enabled: Boolean(slug),
  });
}

export function useWinterTreks() {
  return useQuery({
    queryKey: ['winter-treks'],
    queryFn: () => getWinterTreks(),
  });
}

export function useTreksNear(city: string) {
  return useQuery({
    queryKey: ['treks-near', city],
    queryFn: () => getTreksNearCity(city),
    enabled: Boolean(city),
  });
}

