import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { ArrowUp, Sparkles, ExternalLink, Code2, Heart } from 'lucide-react';

interface FooterProps {
  onProjectsClick: () => void;
  onSkillsClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onProjectsClick,
  onSkillsClick,
  onContactClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-white text-xs">AD</span>
                </div>
              </div>
              <span className="font-display font-bold text-slate-100 text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 font-medium text-xs sm:text-sm">
              {PERSONAL_INFO.primaryTitle}
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-[11px] pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onProjectsClick}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={onSkillsClick}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Demonstrable Skills
                </button>
              </li>
              <li>
                <a href="#approach" className="hover:text-indigo-400 transition-colors">
                  Engineering & Design Approach
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Live Projects (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Live Deployments
            </p>
            <ul className="space-y-2.5">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:text-white transition-all group"
                  >
                    <span className="font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <span>Vercel</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>{PERSONAL_INFO.secondaryTitle}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
