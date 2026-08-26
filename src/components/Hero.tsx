import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Palette, 
  Terminal, 
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';

interface HeroProps {
  onViewWorkClick: () => void;
  onLetBuildClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onLetBuildClick }) => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-slate-800/80"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status & Secondary Title Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/70 rounded-full px-3.5 py-1.5 mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {PERSONAL_INFO.secondaryTitle}
              </span>
            </div>

            {/* Name & Primary Role */}
            <div className="mb-3">
              <p className="text-sm font-semibold tracking-wider uppercase text-indigo-400 font-mono">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-400 mt-1">
                {PERSONAL_INFO.primaryTitle}
              </p>
            </div>

            {/* HERO HEADLINE: I DESIGN. I BUILD. I DEPLOY. */}
            <h1 
              id="hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              <span className="block text-slate-100">I DESIGN.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
                I BUILD.
              </span>
              <span className="block text-slate-100">I DEPLOY.</span>
            </h1>

            {/* SUBHEADING */}
            <p 
              id="hero-subheading"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-4 font-normal"
            >
              {PERSONAL_INFO.subheading}
            </p>

            {/* TAGLINE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 font-mono text-xs sm:text-sm font-medium mb-8">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{PERSONAL_INFO.tagline}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* PRIMARY CTA 1: VIEW MY WORK → */}
              <button
                id="hero-cta-view-work"
                onClick={onViewWorkClick}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all active:scale-[0.98] group"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* PRIMARY CTA 2: LET'S BUILD SOMETHING → */}
              <button
                id="hero-cta-lets-build"
                onClick={onLetBuildClick}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800/90 text-slate-100 border border-slate-700 hover:border-slate-600 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] group"
              >
                <span>LET'S BUILD SOMETHING</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick demonstrable tech pills */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400">
              <span className="text-slate-400 font-semibold">Core Stack:</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">React / Next.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">AI Workflows</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Tailwind CSS</span>
            </div>

          </div>

          {/* Right Visual Architecture / Interactive Developer Console (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1424] to-[#0a0f1d] border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>ankit-profile.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  READY
                </div>
              </div>

              {/* Code / Identity Canvas */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-4">
                
                {/* Object declaration */}
                <div>
                  <p className="text-slate-400">// Personal Identity & Production Pipeline</p>
                  <p className="text-indigo-400">
                    <span className="text-purple-400">const</span> developer = &#123;
                  </p>
                </div>

                <div className="pl-4 space-y-1.5 border-l border-slate-800 ml-1">
                  <p>
                    <span className="text-sky-300">name</span>: <span className="text-emerald-300">"Ankit Deshpande"</span>,
                  </p>
                  <p>
                    <span className="text-sky-300">disciplines</span>: [
                  </p>
                  <div className="pl-4 text-amber-200/90 space-y-0.5">
                    <p>"Full-Stack Development",</p>
                    <p>"AI & Automation Systems",</p>
                    <p>"User-Focused UI/UX Design"</p>
                  </div>
                  <p>],</p>
                  <p>
                    <span className="text-sky-300">featuredProjects</span>: [
                  </p>
                  <div className="pl-4 text-emerald-300 space-y-0.5">
                    <p>"NOVARA" <span className="text-slate-400 text-[10px]">// E-commerce shop</span></p>
                    <p>"URBAN BITE" <span className="text-slate-400 text-[10px]">// Food ordering platform</span></p>
                    <p>"FITCORE" <span className="text-slate-400 text-[10px]">// Fitness wellness app</span></p>
                  </div>
                  <p>],</p>
                  <p>
                    <span className="text-sky-300">deploymentTarget</span>: <span className="text-teal-300">"Vercel Edge Production"</span>,
                  </p>
                  <p>
                    <span className="text-sky-300">status</span>: <span className="text-emerald-400">"Active & Building"</span>
                  </p>
                </div>

                <p className="text-indigo-400">&#125;;</p>

                {/* Quick 3 Pillar Badges */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                    <Palette className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                    <p className="text-[10px] font-bold text-slate-200">DESIGN</p>
                    <p className="text-[9px] text-slate-400">UI/UX Systems</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                    <Code2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <p className="text-[10px] font-bold text-slate-200">BUILD</p>
                    <p className="text-[9px] text-slate-400">Full-Stack Web</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                    <Sparkles className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <p className="text-[10px] font-bold text-slate-200">DEPLOY</p>
                    <p className="text-[9px] text-slate-400">AI & Cloud</p>
                  </div>
                </div>

              </div>

              {/* Bottom footer status */}
              <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  3 Live Production Projects
                </span>
                <button 
                  onClick={onViewWorkClick}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 underline underline-offset-2"
                >
                  Explore Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
