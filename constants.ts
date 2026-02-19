
import { Service, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { 
    label: 'About Us', 
    href: '#about',
    subItems: [
      { label: 'Company Profile', href: '#about' },
      { label: 'Vision & Mission', href: '#vision' },
      { label: 'Board of Directors', href: '#team' },
      { label: 'Message from Chairman', href: '#message' }
    ]
  },
  { 
    label: 'Projects', 
    href: '#projects',
    subItems: [
      { label: 'Completed Projects', href: '#projects' },
      { label: 'Under Construction', href: '#projects' },
      { label: 'Planned Projects', href: '#projects' }
    ]
  },
  { 
    label: 'Services', 
    href: '#services',
    subItems: [
      { label: 'Hydropower Development', href: '#services' },
      { label: 'Investment & Finance', href: '#services' },
      { label: 'Engineering Consulting', href: '#services' }
    ]
  },
  { 
    label: 'Media', 
    href: '#media',
    subItems: [
      { label: 'Articles & News', href: '#media' },
      { label: 'Photo Gallery', href: '#media' },
      { label: 'Video Gallery', href: '#media' }
    ]
  },
  { label: 'Career', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'hydro-dev',
    title: 'Hydropower Development',
    description: 'Expertise in the full lifecycle of hydropower projects, from feasibility and licensing to construction.',
    icon: '💧',
    imageUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'investment',
    title: 'Strategic Investment',
    description: 'Providing capital and strategic partnerships for high-potential renewable energy assets.',
    icon: '📈',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'engineering',
    title: 'Engineering Consulting',
    description: 'Specialized technical consulting for civil, electrical, and mechanical works in extreme terrains.',
    icon: '🏗️',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'environment',
    title: 'Environmental Impact',
    description: 'Rigorous assessments to ensure sustainable and community-focused development.',
    icon: '🌿',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ljhp',
    title: 'Lower Janaki Hydropower Project',
    category: 'Hydro',
    location: 'Myagdi District',
    capacity: '21.5 MW',
    status: 'Under Construction',
    imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mjhp',
    title: 'Middle Janaki Hydropower Project',
    category: 'Hydro',
    location: 'Kaski District',
    capacity: '34.2 MW',
    status: 'Operational',
    imageUrl: 'https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ujhp',
    title: 'Upper Janaki Cascading Project',
    category: 'Hydro',
    location: 'Mustang Region',
    capacity: '12.0 MW',
    status: 'Planned',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS = [
  { label: 'Total Capacity', value: '67.7 MW' },
  { label: 'Projects Portfolio', value: '5+' },
  { label: 'Years of Excellence', value: '14' },
  { label: 'Green Energy/Year', value: '320 GWh' },
];
