import { SkillCategory, Project, PillarApproach } from '../types';

export const PERSONAL_INFO = {
  name: 'Ankit Deshpande',
  primaryTitle: 'Full-Stack Developer · AI Developer · UI/UX Designer',
  secondaryTitle: 'Web Developer · AI · UI/UX · Full-Stack',
  heroHeadline: 'I DESIGN. I BUILD. I DEPLOY.',
  subheading: 'I create modern, responsive and intelligent digital experiences by combining full-stack development, AI and user-focused UI/UX design.',
  tagline: 'Design. Develop. Deploy. Powered by AI.',
  email: 'ankitdeshpande36@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  availability: 'Available for full-time roles & project collaborations',
  location: 'Remote / Global',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'full-stack',
    title: 'FULL-STACK DEVELOPMENT',
    description: 'Building end-to-end scalable web applications with robust frontend architecture and performant backend services.',
    iconName: 'Code2',
    color: 'emerald',
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'Database Integration'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    description: 'Integrating intelligent AI capabilities, prompt workflows, and automated reasoning into modern digital products.',
    iconName: 'Sparkles',
    color: 'indigo',
    skills: [
      'Generative AI',
      'AI-Powered Applications',
      'AI-assisted Development',
      'Prompt Engineering',
      'AI Automation'
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI / UX DESIGN',
    description: 'Crafting user-centric interfaces, interactive prototypes, fluid micro-interactions, and scalable design systems.',
    iconName: 'Palette',
    color: 'sky',
    skills: [
      'UI Design',
      'UX Design',
      'Responsive Design',
      'Design Systems',
      'Prototyping',
      'Interaction Design'
    ]
  },
  {
    id: 'tools-deployment',
    title: 'TOOLS & DEPLOYMENT',
    description: 'Maintaining seamless developer workflows, version control, modern toolchains, and continuous cloud deployments.',
    iconName: 'Terminal',
    color: 'amber',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'VS Code',
      'Tailwind CSS'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'novara',
    title: 'NOVARA',
    tagline: 'Modern Lifestyle & E-Commerce Web Application',
    category: 'E-Commerce · Full-Stack · UI/UX',
    liveUrl: 'https://novara-shop.vercel.app/',
    description: 'A modern, responsive e-commerce platform built for lifestyle shopping. Features intuitive product browsing, dynamic filtering, structured cart management, and a clean minimalist aesthetic focused on effortless checkout flow.',
    highlights: [
      'Interactive product catalog with smooth category filtering',
      'Responsive shopping cart with dynamic item quantity controls',
      'Mobile-first layout optimized for swift touch interaction',
      'High-contrast product typography and clean spatial hierarchy'
    ],
    techStack: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Vercel Deployment'],
    metrics: [
      { label: 'Platform', value: 'Web & Mobile' },
      { label: 'Architecture', value: 'Component-Driven' },
      { label: 'Hosting', value: 'Vercel Edge' }
    ],
    role: 'Full-Stack Development & UI/UX Design',
    accentColor: '#10b981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'urban-bite',
    title: 'URBAN BITE',
    tagline: 'Digital Dining & Food Ordering Platform',
    category: 'Food Tech · Full-Stack · Responsive UX',
    liveUrl: 'https://urban-bite-wheat.vercel.app/',
    description: 'An appetizing digital food ordering and restaurant discovery platform. Designed with vibrant visual elements, categorized menu navigation, interactive cart calculations, and responsive multi-device layouts.',
    highlights: [
      'Dynamic menu exploration with categorized dish filtering',
      'Real-time order summary calculation and customized item options',
      'Streamlined UI designed for high-conversion ordering journeys',
      'Smooth micro-interactions and transitions across mobile & desktop'
    ],
    techStack: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Vercel Deployment'],
    metrics: [
      { label: 'Interface', value: 'Interactive Menu' },
      { label: 'Experience', value: 'Real-Time Cart' },
      { label: 'Status', value: 'Live on Vercel' }
    ],
    role: 'Full-Stack Developer & UI Designer',
    accentColor: '#f97316',
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent'
  },
  {
    id: 'fitcore',
    title: 'FITCORE',
    tagline: 'Modern Fitness & Athletic Wellness Experience',
    category: 'Fitness & Health · Web Development · UI/UX',
    liveUrl: 'https://fitcore-kohl.vercel.app/',
    description: 'A dynamic athletic wellness and gym platform designed to inspire active lifestyle engagement. Features high-energy fitness programming sections, trainer spotlights, class schedules, and clear membership onboarding.',
    highlights: [
      'High-impact visual branding with bold athletic typography',
      'Structured workout program and class schedule layout',
      'Membership conversion funnel with interactive plan details',
      'Performance-tuned responsive design across all screen sizes'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Interaction Design', 'Vercel Hosting'],
    metrics: [
      { label: 'Domain', value: 'Fitness & Health' },
      { label: 'Design System', value: 'Athletic High-Energy' },
      { label: 'Deployment', value: 'Vercel' }
    ],
    role: 'Web Developer & UI/UX Designer',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  }
];

export const WORKFLOW_PILLARS: PillarApproach[] = [
  {
    step: '01',
    title: 'DESIGN',
    subtitle: 'User-Centered UI/UX & Design Systems',
    description: 'Translating functional requirements into clear visual hierarchy, accessible color palettes, responsive typography scales, and intuitive interaction flows.',
    points: [
      'Wireframing & interactive component prototyping',
      'Scalable design systems & consistent spacing grids',
      'Mobile-first responsive UX and touch-friendly controls'
    ],
    icon: 'Layout'
  },
  {
    step: '02',
    title: 'BUILD',
    subtitle: 'Full-Stack Development & Clean Architecture',
    description: 'Developing maintainable, type-safe web applications utilizing modern frameworks, modular component design, and structured REST API integrations.',
    points: [
      'Modern React & Next.js component ecosystems',
      'Type-safe TypeScript & robust Node.js backend logic',
      'Clean database integration & performant state management'
    ],
    icon: 'Cpu'
  },
  {
    step: '03',
    title: 'DEPLOY & AUTOMATE',
    subtitle: 'Cloud Deployment & AI Intelligence',
    description: 'Shipping production code to global edge infrastructure with continuous deployment, automated workflows, and intelligent AI-augmented capabilities.',
    points: [
      'Zero-downtime deployment on Vercel & cloud hosting',
      'Generative AI and prompt-engineered feature integration',
      'Performance optimization & modern Git/GitHub workflows'
    ],
    icon: 'Zap'
  }
];
