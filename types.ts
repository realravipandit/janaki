
export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Hydro' | 'Solar' | 'Wind' | 'Transmission';
  location: string;
  capacity: string;
  status: 'Operational' | 'Under Construction' | 'Planned';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
