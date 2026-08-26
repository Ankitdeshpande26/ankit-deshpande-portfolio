export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  liveUrl: string;
  repoUrl?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  role: string;
  accentColor: string;
  gradient: string;
}

export interface PillarApproach {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}
