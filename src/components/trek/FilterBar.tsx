import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { TrekFilters, TrekDifficulty } from '@/types/trek';
import { formatPrice } from '@/lib/utils';

interface FilterBarProps {
  filters: TrekFilters;
  onChange: (filters: TrekFilters) => void;
  onReset: () => void;
  totalResults: number;
}

const MONTHS = [
  'All Months',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DURATIONS = ['All Durations', '1-2 Days', '3-4 Days', '5+ Days'];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, sortBy: e.target.value as any });
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === 'All Durations' ? undefined : e.target.value;
    onChange({ ...filters, duration: val });
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === 'All Months' ? undefined : e.target.value;
    onChange({ ...filters, month: val });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === 'All Difficulties' ? undefined : (e.target.value as TrekDifficulty);
    onChange({ ...filters, difficulty: val });
  };

  const hasActiveFilters = Boolean(
    filters.duration ||
      filters.month ||
      (filters.maxPrice && filters.maxPrice < 25000) ||
      filters.difficulty ||
      filters.sortBy
  );

  return (
    <div className="bg-white rounded-card p-4 sm:p-5 border border-slate-200 shadow-soft mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Results Counter & Mobile Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-primary-700" />
            <span className="text-sm font-bold text-slate-800">
              Filter Treks ({totalResults} available)
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs text-slate-500 hover:text-accent font-medium flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center gap-3">
          {/* Duration Selector */}
          <div>
            <select
              value={filters.duration || 'All Durations'}
              onChange={handleDurationChange}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              {DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div>
            <select
              value={filters.month || 'All Months'}
              onChange={handleMonthChange}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <select
              value={filters.difficulty || 'All Difficulties'}
              onChange={handleDifficultyChange}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              <option value="All Difficulties">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={filters.sortBy || 'popular'}
              onChange={handleSortChange}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Price Slider Row */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="font-semibold text-slate-700 shrink-0">Max Budget:</span>
          <input
            type="range"
            min="1000"
            max="25000"
            step="1000"
            value={filters.maxPrice || 25000}
            onChange={handlePriceChange}
            className="w-full sm:w-48 accent-primary-700 cursor-pointer"
          />
          <span className="font-bold text-accent font-heading text-sm shrink-0">
            {formatPrice(filters.maxPrice || 25000)}
          </span>
        </div>

        <div className="text-slate-400 text-[11px]">
          Showing certified organizer packages across India
        </div>
      </div>
    </div>
  );
};
