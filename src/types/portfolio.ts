export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  availabilityText: string;
  email: string;
  whatsappNumber: string;
  whatsappPresetMessage: string;
  githubUrl: string;
  linkedinUrl: string;
  youtubeUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  category: 'AI Agents' | 'Automation' | 'Web Apps';
  status: 'Live' | 'Demo' | 'In progress';
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  impactMetric?: {
    label: string;
    value: string;
    evidenceNote?: string;
  };
}

export interface WorkProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  services: ServiceItem[];
  projects: ProjectItem[];
  workProcess: WorkProcessStep[];
  skillCategories: SkillCategory[];
  faq: FaqItem[];
}
