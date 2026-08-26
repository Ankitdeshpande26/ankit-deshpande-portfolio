import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  ShoppingBag,
  UtensilsCrossed,
  Dumbbell,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface FeaturedProjectsProps {
  onPreviewProject: (project: Project) => void;
  onContactClick: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ 
  onPreviewProject,
  onContactClick 
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'novara':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'urban-bite':
        return <UtensilsCrossed className="w-5 h-5 text-orange-400" />;
      case 'fitcore':
        return <Dumbbell className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 font-mono text-xs font-semibold mb-3">
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Production Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Demonstrable full-stack web applications, AI-assisted development, and responsive UI/UX designs deployed live on Vercel.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              Showing 3 Core Applications
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Projects Grid / Cards */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Project Info Column (7 Cols on desktop) */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div>
                      {/* Category & Live Badge */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                          {getProjectIcon(project.id)}
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-medium tracking-wide">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live on Vercel
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mt-1 mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          Demonstrable Features:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                      
                      {/* Primary Live URL Link */}
                      <a
                        id={`btn-visit-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all active:scale-95"
                      >
                        <span>Visit Live Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {/* Interactive In-App Live Preview */}
                      <button
                        id={`btn-preview-${project.id}`}
                        onClick={() => onPreviewProject(project)}
                        className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
                      >
                        <Eye className="w-4 h-4 text-emerald-400" />
                        <span>Interactive Frame Preview</span>
                      </button>

                      {/* URL Badge */}
                      <div className="ml-auto text-[11px] font-mono text-slate-400 hidden xl:block">
                        {project.liveUrl.replace('https://', '')}
                      </div>

                    </div>

                  </div>

                  {/* Visual Preview / Showcase Art (5 Cols on desktop) */}
                  <div className={`lg:col-span-5 bg-slate-950/60 p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 ${isEven ? 'lg:border-r lg:order-1 border-slate-800' : 'lg:border-l lg:order-2 border-slate-800'}`}>
                    
                    {/* Simulated Clean Visual UI Card */}
                    <div className="relative rounded-xl border border-slate-800 bg-[#0c1220] p-4 sm:p-5 shadow-2xl overflow-hidden group/visual">
                      
                      {/* Top browser bar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        </div>
                        <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                          {project.liveUrl.replace('https://', '')}
                        </div>
                        <div className="w-3" />
                      </div>

                      {/* Visual UI Layout Simulation */}
                      {project.id === 'novara' && (
                        <div className="space-y-3">
                          {/* Store Banner */}
                          <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-800/40">
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase">Curated Collection</span>
                            <h4 className="text-base font-display font-bold text-white mt-0.5">NOVARA Lifestyle Store</h4>
                            <p className="text-[11px] text-slate-400 mt-1">Minimalist apparel, footwear & accessories catalog with real-time cart.</p>
                          </div>

                          {/* Mini Product Cards */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <ShoppingBag className="w-6 h-6 text-emerald-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Modern Outerwear</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-emerald-400">$129.00</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">In Stock</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <ShoppingBag className="w-6 h-6 text-teal-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Urban Footwear</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-emerald-400">$89.00</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">In Stock</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'urban-bite' && (
                        <div className="space-y-3">
                          {/* Restaurant Banner */}
                          <div className="p-4 rounded-lg bg-gradient-to-r from-orange-950/80 via-slate-900 to-slate-950 border border-orange-800/40">
                            <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase">Gourmet Delivery</span>
                            <h4 className="text-base font-display font-bold text-white mt-0.5">URBAN BITE Culinary</h4>
                            <p className="text-[11px] text-slate-400 mt-1">Real-time menu ordering, custom toppings & swift order calculation.</p>
                          </div>

                          {/* Mini Menu Items */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <UtensilsCrossed className="w-6 h-6 text-orange-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Signature Burgers</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-orange-400">$14.50</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-mono">Chef Pick</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <UtensilsCrossed className="w-6 h-6 text-amber-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Artisan Bowls</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-orange-400">$16.00</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Fresh</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'fitcore' && (
                        <div className="space-y-3">
                          {/* Fitness Banner */}
                          <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-950/80 via-slate-900 to-slate-950 border border-cyan-800/40">
                            <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">Athletic Training</span>
                            <h4 className="text-base font-display font-bold text-white mt-0.5">FITCORE Gym Platform</h4>
                            <p className="text-[11px] text-slate-400 mt-1">Dynamic schedules, membership tiers & strength training modules.</p>
                          </div>

                          {/* Mini Fitness Modules */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <Dumbbell className="w-6 h-6 text-cyan-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Strength & HIIT</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-cyan-400">45 Mins</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Daily</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                              <div className="h-16 rounded bg-slate-800/60 flex items-center justify-center text-slate-500 mb-2">
                                <Dumbbell className="w-6 h-6 text-blue-400/60" />
                              </div>
                              <p className="text-[11px] font-bold text-slate-200">Cardio & Mobility</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] font-mono text-cyan-400">60 Mins</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">All Levels</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quick Interactive Hover Preview Overlay */}
                      <button
                        onClick={() => onPreviewProject(project)}
                        className="w-full mt-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Launch Fullscreen Preview</span>
                      </button>

                    </div>

                    {/* Metrics Footer */}
                    <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-2 rounded bg-slate-900/60 border border-slate-800/70">
                          <p className="text-[9px] text-slate-400 uppercase">{metric.label}</p>
                          <p className="text-[11px] font-bold text-slate-200 mt-0.5 truncate">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box under projects */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#0e1424] to-slate-900 border border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-display font-bold text-white">
              Interested in custom web applications or AI integrations?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Let's discuss architecture, user interface design, and deployment pipelines.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <span>LET'S BUILD SOMETHING</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
