export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    code: string | null;
  };
  image: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  url: string | null;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
}

export interface Stat {
  label: string;
  value: string;
}
