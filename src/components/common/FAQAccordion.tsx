import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types/trek';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3 sm:space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-xl border transition-colors duration-200 overflow-hidden',
              isOpen
                ? 'border-primary-200 bg-white shadow-soft ring-1 ring-primary-100'
                : 'border-slate-200 bg-white hover:border-slate-300'
            )}
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-medium text-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-inset"
            >
              <span className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180 bg-primary-100 text-primary-700'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm sm:text-base text-content-muted leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

