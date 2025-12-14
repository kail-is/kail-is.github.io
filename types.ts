export type Language = 'en' | 'ko';

export interface MultiLangText {
  en: string;
  ko: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: MultiLangText;
  detail: string;
  image: string; 
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tech: string;
  desc: MultiLangText;
  year: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}