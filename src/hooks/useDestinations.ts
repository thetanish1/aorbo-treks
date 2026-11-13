import { useQuery } from '@tanstack/react-query';
import {
  getDestinations,
  getDestinationBySlug,
  getPopularDestinations,
  getStateGroups,
  getOrganisers,
  getOrganiser,
  getBlogs,
  getBlog,
  getGeneralFaqs,
  getWinterFaqs,
} from '@/services/api';

export function useDestinations() {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
  });
}

export function useDestination(slug: string) {
  return useQuery({
    queryKey: ['destination', slug],
    queryFn: () => getDestinationBySlug(slug),
    enabled: Boolean(slug),
  });
}

export function usePopularDestinations() {
  return useQuery({
    queryKey: ['popular-destinations'],
    queryFn: getPopularDestinations,
  });
}

export function useStateGroups() {
  return useQuery({
    queryKey: ['state-groups'],
    queryFn: getStateGroups,
  });
}

export function useOrganisers() {
  return useQuery({
    queryKey: ['organisers'],
    queryFn: getOrganisers,
  });
}

export function useOrganiser(id: string) {
  return useQuery({
    queryKey: ['organiser', id],
    queryFn: () => getOrganiser(id),
    enabled: Boolean(id),
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });
}

export function useBlog(slug: string) {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => getBlog(slug),
    enabled: Boolean(slug),
  });
}

export function useGeneralFaqs() {
  return useQuery({
    queryKey: ['faqs', 'general'],
    queryFn: getGeneralFaqs,
  });
}

export function useWinterFaqs() {
  return useQuery({
    queryKey: ['faqs', 'winter'],
    queryFn: getWinterFaqs,
  });
}

