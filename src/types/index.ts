export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
  role?: string;
}

export interface SkillItem {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Proficient";
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database" | "Tools & DevOps";
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  location?: string;
  description: string[];
  technologies: string[];
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface NavItem {
  label: string;
  href: string;
}
