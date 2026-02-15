import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Import all translations
import { de } from '../translations/de';
import { en } from '../translations/en';
import { ku } from '../translations/ku';
import { ar } from '../translations/ar';
import { fr } from '../translations/fr';
import { es } from '../translations/es';

export type Language = 'de' | 'en' | 'ku' | 'ar' | 'fr' | 'es';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('de');
  private translations = new BehaviorSubject<any>(de);

  // Available languages
  public readonly languages: LanguageOption[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'ku', name: 'Kurdish Sorani', nativeName: 'کوردی سۆرانی', flag: '🏴' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' }
  ];

  // Translation files
  private readonly translationFiles = {
    de,
    en,
    ku,
    ar,
    fr,
    es
  };

  constructor() {
    // Load saved language from localStorage or use browser language
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('nexora-language') as Language;
    const browserLanguage = this.getBrowserLanguage();
    
    const initialLanguage = savedLanguage || browserLanguage || 'de';
    this.setLanguage(initialLanguage);
  }

  private getBrowserLanguage(): Language | null {
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages: Language[] = ['de', 'en', 'ku', 'ar', 'fr', 'es'];
    
    if (supportedLanguages.includes(browserLang as Language)) {
      return browserLang as Language;
    }
    
    return null;
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translations.next(this.translationFiles[language]);
    localStorage.setItem('nexora-language', language);
    
    // Update HTML lang attribute and direction for RTL languages
    document.documentElement.lang = language;
    
    // Set direction for RTL languages (Arabic and Kurdish)
    if (language === 'ar' || language === 'ku') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  getTranslations() {
    return this.translations.asObservable();
  }

  translate(key: string, params?: { [key: string]: string }): string {
    const translation = this.translations.getValue()[key];
    
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    // Replace parameters in translation
    if (params) {
      return this.replaceParameters(translation, params);
    }

    return translation;
  }

  private replaceParameters(text: string, params: { [key: string]: string }): string {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key] || match;
    });
  }

  getCurrentLanguageOption(): LanguageOption {
    return this.languages.find(lang => lang.code === this.currentLanguage()) || this.languages[1];
  }
}
