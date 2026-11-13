import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'View all',
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10',
        align === 'center' && 'text-center md:flex-col md:items-center',
        className
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-2.5">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content font-heading">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-content-muted leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllLink && (
        <div className="shrink-0 pt-1">
          <Link
            to={viewAllLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors group"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

