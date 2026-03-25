export interface Reference {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: string;
}

export const references = {
  articles: [
    {
      id: 'article-1',
      icon: '📄',
      title: 'Web Design for Autism - Uni of Melbourne',
      url: 'https://www.unimelb.edu.au/accessibility/web-design-for-autism',
      description: 'Comprehensive guide on creating autism-friendly web experiences.',
    },
    {
      id: 'article-2',
      icon: '📖',
      title: 'Create an Accessible Website - Medium',
      url: 'https://medium.com/@oksana.iudenkova/create-an-accessible-website',
      description: 'Step-by-step approach to accessible web design.',
    },
    {
      id: 'article-3',
      icon: '🌐',
      title: 'Best Autism Websites - Webflow',
      url: 'https://webflow.com/made-in-webflow/autism',
      description: 'Showcase of excellent autism-friendly website examples.',
    },
  ] as Reference[],
  videos: [
    {
      id: 'video-1',
      icon: '▶️',
      title: 'Designing for Web Accessibility - YouTube',
      url: 'https://youtu.be/ou8kT9G5ZN4',
      description: 'Learn fundamental web accessibility principles.',
    },
    {
      id: 'video-2',
      icon: '🎥',
      title: 'Autism & Neurodiversity Inclusive Design',
      url: 'https://youtu.be/zf-1AeoaiqI',
      description: 'Inclusive design principles for neurodivergent users.',
    },
    {
      id: 'video-3',
      icon: '📹',
      title: 'How to Design for Autism',
      url: 'https://youtu.be/_F_8s02KuT8',
      description: 'Practical tips for designing autism-friendly interfaces.',
    },
    {
      id: 'video-4',
      icon: '🎬',
      title: 'WCAG Accessibility Guidelines Explained',
      url: 'https://www.w3.org/WAI/WCAG21/quickref/',
      description: 'Web Content Accessibility Guidelines reference.',
    },
    {
      id: 'video-5',
      icon: '🎞️',
      title: 'Creating Sensory-Friendly UX',
      url: 'https://www.example.com/sensory-ux',
      description: 'Design techniques for reducing sensory overload.',
    },
  ] as Reference[],
};

export const reactConcepts = [
  { name: 'useState', difficulty: 'Beginner', color: '#6BCB77' },
  { name: 'useEffect', difficulty: 'Beginner', color: '#6BCB77' },
  { name: 'useContext', difficulty: 'Intermediate', color: '#4ECDC4' },
  { name: 'Props', difficulty: 'Beginner', color: '#6BCB77' },
  { name: 'PropTypes', difficulty: 'Beginner', color: '#6BCB77' },
  { name: 'Event Handling', difficulty: 'Intermediate', color: '#4ECDC4' },
  { name: 'Conditional Rendering', difficulty: 'Intermediate', color: '#4ECDC4' },
  { name: 'Lists & Keys', difficulty: 'Intermediate', color: '#4ECDC4' },
  { name: 'Context API', difficulty: 'Advanced', color: '#9B59B6' },
  { name: 'Class Components', difficulty: 'Advanced', color: '#9B59B6' },
  { name: 'React Router', difficulty: 'Advanced', color: '#9B59B6' },
  { name: 'Controlled Components', difficulty: 'Advanced', color: '#9B59B6' },
  { name: 'Error Boundaries', difficulty: 'Advanced', color: '#9B59B6' },
];
