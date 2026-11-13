import React from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLButtonElement | HTMLSpanElement> {
  active?: boolean;
  variant?: 'default' | 'outline' | 'accent' | 'secondary';
  count?: number;
  asButton?: boolean;
  onRemove?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  active = false,
  variant = 'default',
  count,
  className,
  children,
  asButton = true,
  onRemove,
  ...props
}) => {
  const Component = asButton ? 'button' : 'span';

  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 select-none whitespace-nowrap';

  const activeStyles = active
    ? 'bg-primary-700 text-white shadow-sm ring-2 ring-primary-700/20'
    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-transparent';

  const variants = {
    default: activeStyles,
    outline: active
      ? 'border-primary-700 bg-primary-50 text-primary-700'
      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
    accent: active
      ? 'bg-accent text-white'
      : 'bg-orange-50 text-accent hover:bg-orange-100 border border-orange-200/50',
    secondary: 'bg-slate-100 text-slate-600',
  };

  return (
    <Component
      type={asButton ? 'button' : undefined}
      className={cn(baseStyles, variants[variant], className)}
      {...(props as any)}
    >
      <span>{children}</span>
      {count !== undefined && (
        <span
          className={cn(
            'inline-flex items-center justify-center text-[10px] font-semibold px-1.5 py-0.5 rounded-full',
            active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
          )}
        >
          {count}
        </span>
      )}
      {onRemove && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:text-red-500 cursor-pointer"
        >
          ×
        </span>
      )}
    </Component>
  );
};

