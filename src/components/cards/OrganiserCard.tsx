import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck } from 'lucide-react';
import { Organiser } from '@/types/trek';

interface OrganiserCardProps {
  organiser: Organiser;
}

export const OrganiserCard: React.FC<OrganiserCardProps> = ({ organiser }) => {
  return (
    <div className="bg-white rounded-card p-5 sm:p-6 border border-slate-200/90 shadow-soft hover:shadow-lift transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={organiser.logo}
            alt={organiser.name}
            className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-100 shadow-sm shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 truncate">
                {organiser.name}
              </h3>
              {organiser.verified && (
                <ShieldCheck
                  className="w-4 h-4 text-primary-700 shrink-0"
                  aria-label="Verified Organiser"
                />
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Operating since {organiser.establishedYear}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {organiser.rating}
              </span>
              <span className="text-xs text-slate-500">
                ({organiser.reviewsCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {organiser.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {organiser.badges.map((badge) => (
            <span
              key={badge}
              className="text-[11px] font-medium bg-emerald-50 text-primary-800 px-2 py-0.5 rounded-full border border-emerald-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">
          {organiser.treksCount} active packages
        </span>
        <Link
          to={`/destinations`}
          className="text-primary-700 font-semibold hover:text-primary-800 hover:underline"
        >
          View treks →
        </Link>
      </div>
    </div>
  );
};
