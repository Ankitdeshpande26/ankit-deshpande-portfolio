import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Code, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onProjectsClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', action: onProjectsClick },
    { label: 'Skills', href: '#skills' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact', action: onContactClick },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300 text-base">
                  AD
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-indigo-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-tight hidden sm:block">
                Full-Stack · AI · UI/UX
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800/70 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Quick Action */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for projects</span>
            </div>

            <button
              id="header-contact-btn"
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for projects</span>
            </div>
            <button
              id="mobile-contact-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-2.5 rounded-lg transition-colors"
            >
              LET'S BUILD SOMETHING →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
