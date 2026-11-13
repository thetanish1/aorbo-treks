import React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'rounded';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rounded',
  ...props
}) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-slate-200/80',
        variant === 'circular' && 'rounded-full',
        variant === 'rounded' && 'rounded-xl',
        variant === 'rectangular' && 'rounded-none',
        className
      )}
      {...props}
    />
  );
};

export const TrekCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-card overflow-hidden border border-slate-200/80 shadow-soft">
      <Skeleton className="aspect-[16/10] w-full rounded-none" />
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <div className="flex gap-1.5 py-1">
          <Skeleton className="h-5 w-10 rounded-full" />
          <Skeleton className="h-5 w-10 rounded-full" />
          <Skeleton className="h-5 w-10 rounded-full" />
        </div>
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

