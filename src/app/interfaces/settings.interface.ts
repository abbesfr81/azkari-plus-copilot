export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  fontSize: number;
  language: 'ar' | 'fr';
  rtl: boolean;
  notifications: {
    morning: string; // Time in HH:mm format
    evening: string; // Time in HH:mm format
  };
}

export interface NotificationSettings {
  enabled: boolean;
  time: string; // HH:mm format
  type: 'morning' | 'evening';
}
