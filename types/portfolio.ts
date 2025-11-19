export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  libraries: string[];
  practices: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}
