import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { cn } from '@/lib/utils';
import { ShieldAlert, FileText, ScrollText, RotateCcw } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
}) => {
  const legalLinks = [
    { title: 'Terms & Conditions', path: '/terms', icon: FileText },
    { title: 'Privacy Policy', path: '/privacy-policy', icon: ShieldAlert },
    { title: 'User Agreement', path: '/user-agreement', icon: ScrollText },
    { title: 'Refund Policy', path: '/refund-policy', icon: RotateCcw },
  ];

  return (
    <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Legal Policies', href: '/terms' },
            { label: title },
          ]}
          className="mb-6"
        />

        <div className="mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-sm text-content-muted">
            Last updated: <span className="font-medium text-slate-700">{lastUpdated}</span> • TrekNest Marketplace Platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-5 rounded-card border border-slate-200 shadow-soft space-y-2">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-content-muted px-3 py-1 font-heading">
                Legal Documents
              </h2>
              <nav className="space-y-1">
                {legalLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary-50 text-primary-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        )
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{link.title}</span>
                    </NavLink>
                  );
                })}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-100 px-3 text-xs text-content-muted leading-relaxed">
                Need clarification? Contact our legal team at{' '}
                <a href="mailto:legal@treknest.in" className="text-primary-700 hover:underline">
                  legal@treknest.in
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Document Content */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-card border border-slate-200 shadow-soft prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-content prose-a:text-primary-700">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
};

