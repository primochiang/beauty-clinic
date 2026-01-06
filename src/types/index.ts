// 醫師型別
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  education: string;
  experience: string;
  certification: string;
  expertise: string[];
  image: string;
  isDirector?: boolean;
}

// 療程型別
export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategory;
  description: string;
  suitable: string;
  duration: string;
  image: string;
}

export type TreatmentCategory = 'micro' | 'laser' | 'face' | 'body' | 'custom';

export interface TreatmentCategoryInfo {
  id: TreatmentCategory;
  name: string;
  icon: string;
  description: string;
}

// 文章型別
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  doctorId: string;
  date: string;
  image: string;
}

export type ArticleCategory = 'knowledge' | 'aftercare' | 'myths';

// 案例型別
export interface Case {
  id: string;
  title: string;
  category: TreatmentCategory;
  treatment: string;
  sessions: string;
  doctorId: string;
  description: string;
  clientInfo: string;
  image: string;
}

// FAQ 型別
export interface FAQItem {
  question: string;
  answer: string;
}

// 輪播型別
export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  image: string;
}
