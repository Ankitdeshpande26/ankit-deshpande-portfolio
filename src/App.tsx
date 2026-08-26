import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { SkillsSection } from './components/SkillsSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [activePreviewProject, setActivePreviewProject] = useState<Project | null>(null);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Navigation */}
      <Navbar 
        onContactClick={scrollToContact} 
        onProjectsClick={scrollToProjects} 
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onViewWorkClick={scrollToProjects}
          onLetBuildClick={scrollToContact}
        />

        {/* Featured Projects (Novara, Urban Bite, FitCore) */}
        <FeaturedProjects
          onPreviewProject={(project) => setActivePreviewProject(project)}
          onContactClick={scrollToContact}
        />

        {/* Demonstrable Skills Section */}
        <SkillsSection />

        {/* Workflow & Approach (I Design, I Build, I Deploy) */}
        <ApproachSection onContactClick={scrollToContact} />

        {/* Contact & Inquiries Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onProjectsClick={scrollToProjects}
        onSkillsClick={scrollToSkills}
        onContactClick={scrollToContact}
      />

      {/* Interactive In-App Live Project Preview Modal */}
      <ProjectPreviewModal
        project={activePreviewProject}
        onClose={() => setActivePreviewProject(null)}
      />
    </div>
  );
}
