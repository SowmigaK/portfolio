import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' }
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors border-b ${
        isDark
          ? 'bg-[#0B0F17]/95 border-slate-800/80 text-slate-100'
          : 'bg-white/95 border-slate-200 text-slate-900'
      } backdrop-blur-md`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Title */}
        <a
          href="#home"
          className="text-lg font-display font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-teal-500"
        >
          {PROFILE_DATA.name}
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`py-1 whitespace-nowrap shrink-0 border-b-2 transition-colors ${
                  isActive
                    ? isDark
                      ? 'border-emerald-400 text-white font-semibold'
                      : 'border-teal-600 text-slate-900 font-semibold'
                    : isDark
                      ? 'border-transparent text-slate-400 hover:text-slate-100'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              isDark
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
              isDark
                ? 'border-slate-800 text-slate-200 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className={`md:hidden border-t px-6 py-4 space-y-2 ${
            isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive
                    ? isDark
                      ? 'text-emerald-400 font-semibold'
                      : 'text-teal-700 font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`inline-flex w-full items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Let&apos;s Connect
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
