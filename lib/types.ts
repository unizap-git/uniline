export interface IconSettings {
  size: number;
  color: string;
  strokeWidth: number;
  variant: 'line' | 'fill';
}

export interface IconItem {
  name: string;
  keywords: string[];
  category: string;
}

export interface IconCategory {
  id: string;
  name: string;
  icons: IconItem[];
}
