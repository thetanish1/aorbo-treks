import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Smartphone, Mountain } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open & listen for Escape
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Safety', path: '/safety' },
    { label: 'Contact us', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200 bg-white',
        isScrolled
          ? 'shadow-sm border-b border-slate-200/90 py-3'
          : 'border-b border-slate-100 py-4'
      )}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 rounded-lg p-1 -m-1"
          aria-label="TrekNest Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Mountain className="w-5 h-5 text-emerald-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 leading-none">
              Trek<span className="text-primary-700">Nest</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase text-content-muted font-semibold mt-0.5">
              Verified Marketplace
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3.5 py-2 text-sm font-medium transition-colors relative rounded-md hover:text-primary-700',
                  isActive
                    ? 'text-primary-700 font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-primary-700 after:rounded-full'
                    : 'text-slate-600'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/app">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Smartphone className="w-4 h-4" />}
            >
              Get the app
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-slate-700 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center text-white">
                      <Mountain className="w-4 h-4 text-emerald-300" />
                    </div>
                    <span className="font-heading font-bold text-lg text-slate-900">
                      Trek<span className="text-primary-700">Nest</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col py-6 space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                          isActive
                            ? 'bg-primary-50 text-primary-700 font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <div className="pt-2 border-t border-slate-100 mt-2 space-y-1">
                    <NavLink
                      to="/destinations"
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      All Destinations
                    </NavLink>
                    <NavLink
                      to="/winter-treks"
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      Winter Treks
                    </NavLink>
                    <NavLink
                      to="/treks-near"
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      Treks Near You
                    </NavLink>
                    <NavLink
                      to="/organisers"
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      Trek Organisers
                    </NavLink>
                  </div>
                </nav>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <Link to="/app" className="block">
                  <Button
                    variant="primary"
                    fullWidth
                    size="md"
                    leftIcon={<Smartphone className="w-4 h-4" />}
                  >
                    Get the App
                  </Button>
                </Link>
                <p className="text-center text-xs text-content-muted">
                  Based in Hyderabad, Telangana • Verified Treks
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
