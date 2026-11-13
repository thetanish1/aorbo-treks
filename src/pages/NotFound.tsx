import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Mountain } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SEO } from '@/components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Trail Not Found"
        description="The trail or page you are looking for does not exist on TrekNest."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-surface-alt px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-card p-8 sm:p-10 border border-slate-200 shadow-soft text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-700 mx-auto flex items-center justify-center">
            <Compass className="w-10 h-10 animate-spin duration-[8000ms]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
              Error 404
            </span>
            <h1 className="text-3xl font-bold font-heading text-slate-900 mt-1">
              You've wandered off the trail!
            </h1>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              The page or destination you are searching for might have moved, or the link may be outdated.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button variant="primary" fullWidth leftIcon={<Home className="w-4 h-4" />}>
                Back to Home
              </Button>
            </Link>
            <Link to="/destinations">
              <Button variant="outline" fullWidth leftIcon={<Mountain className="w-4 h-4" />}>
                Explore Treks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
