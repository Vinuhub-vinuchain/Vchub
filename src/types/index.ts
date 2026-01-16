export type TabKey = 'audited' | 'upcoming' | 'launched' | 'live';

export interface ProjectLink {
  label: string;
  url: string;
  onclick?: () => void;
}

export interface Project {
  id: string; 
  name: string;
  desc: string;
  icon: string;
  isLive: boolean;
  links: ProjectLink[];
}
