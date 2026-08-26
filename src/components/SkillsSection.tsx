import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Sparkles, 
  Palette, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Search,
  Filter,
  Cpu,
  Boxes
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Boxes className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return false;
    }
    if (!searchTerm) return true;
    const matchesTitle = cat.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = cat.skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesTitle || matchesSkills;
  });

  return (
    <section id="skills" className="py-24 bg-[#080c15] relative border-t border-b border-slate-800/80">
      
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 font-mono text-xs font-semibold mb-3">
              <span>DEMONSTRABLE SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Technical & Design Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Specialized across modern full-stack development, AI workflows, user-centered interface design, and deployment pipelines.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>4 Core Disciplines</span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            <button
              id="skill-tab-all"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Search skill (e.g. React, AI, UI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`skill-category-card-${category.id}`}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1424] border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-lg group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} Demonstrated Capabilities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges Matrix */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Technologies & Competencies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <div
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            isHighlighted
                              ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                              : 'bg-slate-950 border border-slate-800/90 text-slate-200 hover:border-slate-600 hover:text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Production Tested</span>
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Applied in Novara, Urban Bite & FitCore
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
