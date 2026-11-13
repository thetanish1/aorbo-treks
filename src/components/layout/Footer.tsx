import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-footer text-dark-text pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center text-white">
                <Mountain className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Trek<span className="text-emerald-400">Nest</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#A0AEA9] max-w-sm">
              Online trek booking platform: compare treks from verified organisers across India and book them in one place. Whether you're going solo or with a group, we make trekking simple and hassle-free. Based in Hyderabad, Telangana.
            </p>

            {/* Google Play Badge Placeholder */}
            <div className="pt-2">
              <Link
                to="/app"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-emerald-500 hover:bg-slate-900 transition-all text-white group"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.573V3.427c0-.648.225-1.24.609-1.613zM14.922 13.129l2.766-2.766L4.767 2.928a2.38 2.38 0 0 1 .843-.162c.504 0 .999.153 1.422.423l12.428 7.078-4.538 2.862zm0-2.258l4.538 2.862-12.428 7.078a2.808 2.808 0 0 1-1.422.423c-.3 0-.594-.054-.843-.162l12.921-7.435-2.766-2.766zm1.129 1.129l3.585-2.261a1.97 1.97 0 0 1 1.954-.038c.612.351.99.999.99 1.706 0 .707-.378 1.355-.99 1.706l-3.585-2.261a1.328 1.328 0 0 1-.364-.325l-.014-.027.424-.5z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">GET IT ON</span>
                  <span className="text-xs font-semibold text-white tracking-wide">Google Play</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: About (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-heading">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-white transition-colors">
                  Safety Standards
                </Link>
              </li>
              <li>
                <Link to="/organisers" className="hover:text-white transition-colors">
                  Verified Organisers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-heading">
              Information
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <Link to="/terms" className="hover:text-white transition-colors">
                T&C
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
              <Link to="/treks-near" className="hover:text-white transition-colors">
                Treks near you
              </Link>
              <Link to="/destinations" className="hover:text-white transition-colors">
                Destinations
              </Link>
              <Link to="/organisers" className="hover:text-white transition-colors">
                Trek organisers
              </Link>
              <Link to="/winter-treks" className="hover:text-white transition-colors text-emerald-400 font-medium">
                Winter treks
              </Link>
              <Link to="/app" className="hover:text-white transition-colors">
                App
              </Link>
              <Link to="/user-agreement" className="hover:text-white transition-colors">
                User Agreement
              </Link>
              <Link to="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="/safety#insurance" className="hover:text-white transition-colors">
                Insurance Partner
              </Link>
            </div>
          </div>

          {/* Column 4: Follow our socials (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-heading">
              Follow our socials
            </h4>
            <div className="flex items-center gap-2.5 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-700 hover:border-primary-600 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Quora placeholder */}
              <a
                href="https://quora.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quora"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-700 hover:border-primary-600 transition-all duration-200 font-bold text-xs"
              >
                Q
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-700 hover:border-primary-600 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-700 hover:border-primary-600 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <span className="text-xs text-slate-400 block">
                Headquarters: Hyderabad, Telangana
              </span>
              <span className="text-xs text-emerald-400 font-medium block mt-1">
                Verified Outdoor Platform
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 TrekNest. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
