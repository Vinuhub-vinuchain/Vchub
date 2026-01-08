export interface Link {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  desc: string;
  isLive: boolean;
  links: Link[];
}

export type TabKey = 'audited' | 'upcoming' | 'launched' | 'live';
