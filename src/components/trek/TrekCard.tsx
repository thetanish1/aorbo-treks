import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, Sparkles } from 'lucide-react';
import { Trek } from '@/types/trek';
import { formatPrice } from '@/lib/utils';

interface TrekCardProps {
  trek: Trek;
}

const ALL_WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const TrekCard: React.FC<TrekCardProps> = ({ trek }) => {
  return (
    <Link
      to={`/treks/${trek.slug}`}
      className="group flex flex-col bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700"
    >
      {/* Image Container with 16:10 aspect ratio */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        <img
          src={trek.images[0]}
          alt={trek.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          {trek.badge ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {trek.badge}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white">
              {trek.difficulty || 'Moderate'}
            </span>
          )}

          {trek.rating && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm ml-auto">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{trek.rating.toFixed(1)}</span>
            </span>
          )}
        </div>

        {/* Season or State Chip if present */}
        {trek.isWinterSpecial && (
          <div className="absolute bottom-3 left-3 pointer-events-none">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-900/85 text-cyan-200 backdrop-blur-md">
              ❄️ Snow Trek
            </span>
          </div>
        )}
      </div>

      {/* Content Block */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Destination & State */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary-700 shrink-0" />
            <span className="truncate">
              {trek.destinationName}, {trek.state}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 line-clamp-2 group-hover:text-primary-700 transition-colors leading-snug">
            {trek.title}
          </h3>

          {/* Durations Chip */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-600">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
              {trek.durations[0]}
              {trek.durations.length > 1 && ` (+${trek.durations.length - 1} options)`}
            </span>
          </div>

          {/* Available Weekdays */}
          <div className="mt-3">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
              Departures
            </span>
            <div className="flex items-center gap-1 flex-wrap">
              {ALL_WEEKDAYS.map((day) => {
                const isAvailable = trek.weekdays.includes(day as any);
                return (
                  <span
                    key={day}
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      isAvailable
                        ? 'bg-emerald-50 text-emerald-800 font-semibold ring-1 ring-emerald-600/20'
                        : 'bg-slate-50 text-slate-400 line-through'
                    }`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Price & Action Bottom Row */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
              Starting from
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl text-accent font-heading">
                {formatPrice(trek.fromPrice)}
              </span>
              <span className="text-[11px] text-slate-500 font-normal">onwards*</span>
            </div>
          </div>

          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors">
            View trek →
          </span>
        </div>
      </div>
    </Link>
  );
};
