import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TrekReview } from '@/types/trek';

interface ReviewCardProps {
  review: TrekReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold text-xs flex items-center justify-center">
            {review.author[0]}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">
              {review.author}
            </h4>
            {review.city && (
              <span className="text-[11px] text-slate-500">{review.city}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-slate-200">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-slate-800">{review.rating}</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
        "{review.comment}"
      </p>

      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>{review.date}</span>
        {review.verifiedBooking && (
          <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Verified Trekker
          </span>
        )}
      </div>
    </div>
  );
};

