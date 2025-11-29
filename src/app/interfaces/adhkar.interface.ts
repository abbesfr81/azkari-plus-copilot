export interface Adhkar {
  id: string;
  category: 'morning' | 'evening' | 'prayer' | 'sleep' | 'wake';
  arabic: string;
  transliteration: string;
  translation: string;
  source: string;
  repetitions: number;
  audioUrl?: string;
}

export interface AdhkarCategory {
  id: string;
  nameAr: string;
  nameFr: string;
  icon: string;
}
