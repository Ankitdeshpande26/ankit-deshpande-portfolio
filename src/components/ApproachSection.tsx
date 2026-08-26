import React from 'react';
import { WORKFLOW_PILLARS } from '../data/portfolioData';
import { Layout, Cpu, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onContactClick: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onContactClick }) => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-indigo-400" />;
      default:
        return <Cpu className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="approach" className="py-24 bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 font-mono text-xs font-semibold mb-3">
            <span>ENGINEERING & DESIGN PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            How I Bring Products to Life
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A disciplined, end-to-end approach combining clean user experience design, type-safe full-stack code, and AI-powered automation.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {WORKFLOW_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.step}
              id={`process-card-${pillar.title.toLowerCase()}`}
              className="rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1424] to-[#0a0f1d] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Step indicator & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-indigo-400 transition-colors">
                    {pillar.step}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
                    {getPillarIcon(pillar.icon)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-display font-bold text-white tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Specific Process Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {pillar.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase {idx + 1} Execution</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
