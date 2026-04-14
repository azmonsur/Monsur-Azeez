// src/types/portfolio.ts
export interface Project {
  id: number;
  name: string;
  desc: string;
  img: string;
  type: string;
  github_link: string;
  other_link: string;
  complete: boolean;
}

export interface Service {
  id: number;
  name: string;
  services: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  category: string;
}

export interface NavItem {
  name: string;
  href: string;
}
