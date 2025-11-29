import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

type Language = 'ar' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly language = signal<Language>(this.getStoredLanguage());

  constructor() {
    this.updateDocumentDirection();
  }

  private getStoredLanguage(): Language {
    if (this.isBrowser) {
      return (localStorage.getItem('language') as Language) || 'ar';
    }
    return 'ar';
  }

  setLanguage(lang: Language): void {
    this.language.set(lang);
    if (this.isBrowser) {
      localStorage.setItem('language', lang);
    }
    this.updateDocumentDirection();
  }

  private updateDocumentDirection(): void {
    this.document.documentElement.dir = this.language() === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.lang = this.language();
  }
}
