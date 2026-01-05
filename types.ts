
// Define types used across the application
export type Page = 'home' | 'gallery' | 'philosophy' | 'experience' | 'commission';

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  specs: string;
  image: string;
  category: string;
  aspectRatio: 'square' | 'video' | 'portrait';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
