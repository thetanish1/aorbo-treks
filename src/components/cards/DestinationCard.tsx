import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Destination } from '@/types/trek';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group relative flex-shrink-0 w-64 sm:w-72 h-80 rounded-card overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700"
    >
      <img
        src={
          destination.image ||
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
        }
        alt={destination.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Top Count Chip */}
      <div className="absolute top-3.5 right-3.5">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
          {destination.count} {destination.count === 1 ? 'package' : 'packages'}
        </span>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{destination.state}</span>
        </div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight flex items-center justify-between">
          <span>{destination.name}</span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent" />
        </h3>
        {destination.description && (
          <p className="mt-1 text-xs text-slate-200 line-clamp-2">
            {destination.description}
          </p>
        )}
      </div>
    </Link>
  );
};

