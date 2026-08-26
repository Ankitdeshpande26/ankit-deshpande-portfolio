import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  RotateCw, 
  Layers, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div 
      id="project-preview-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="project-preview-modal-container"
        className="bg-[#0b101e] border border-slate-700/80 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
          
          {/* Project Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs font-display">
              {project.title.substring(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-display">{project.title}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Live on Vercel
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                {project.liveUrl}
              </p>
            </div>
          </div>

          {/* Device Switcher & Controls */}
          <div className="flex items-center gap-2">
            
            {/* Viewport toggle */}
            <div className="hidden sm:flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  deviceMode === 'desktop'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  deviceMode === 'mobile'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Refresh */}
            <button
              onClick={reloadIframe}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Reload Frame"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            {/* Open in new tab */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Frame Area */}
        <div className="flex-1 bg-slate-950/90 relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
          
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#090d16] z-10">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs font-mono text-slate-400">Loading {project.title} live environment...</p>
            </div>
          )}

          {/* Device wrapper */}
          <div 
            className={`h-full transition-all duration-300 bg-white rounded-lg shadow-2xl overflow-hidden ${
              deviceMode === 'mobile' 
                ? 'w-[375px] max-h-[740px] border-8 border-slate-800 rounded-[32px] shadow-indigo-900/20' 
                : 'w-full'
            }`}
          >
            <iframe
              key={iframeKey}
              src={project.liveUrl}
              title={`${project.title} Live Preview`}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

        </div>

        {/* Bottom Details Drawer */}
        <div className="px-4 py-3 bg-slate-900/95 border-t border-slate-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-300">Stack:</span>
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                {tech}
              </span>
            ))}
          </div>

          <div className="text-slate-400 font-mono text-[11px]">
            Role: <span className="text-indigo-300">{project.role}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
