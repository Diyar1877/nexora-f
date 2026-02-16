import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { de } from '../translations/de';
import { en } from '../translations/en';

export type Language = 'de' | 'en';

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

  private translations = new BehaviorSubject<Record<string, string>>(de);

  private languageChangeSubject = new BehaviorSubject<Language>('de');
  public languageChange$ = this.languageChangeSubject.asObservable();

  public readonly languages: LanguageOption[] = [
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' }
  ];

  private readonly translationFiles: Record<Language, Record<string, string>> = {
    de,
    en
  };

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('nexora-language') as Language | null;
    const browserLanguage = this.getBrowserLanguage();

    const initialLanguage = savedLanguage ?? browserLanguage ?? 'de';
    this.setLanguage(initialLanguage);
  }

  private getBrowserLanguage(): Language | null {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' || browserLang === 'en'
      ? browserLang
      : null;
  }

  setLanguage(language: Language): void {
    const file = this.translationFiles[language];

    if (!file) {
      console.error('Translation file not found for:', language);
      return;
    }

    this.currentLanguage.set(language);
    this.translations.next(file);
    this.languageChangeSubject.next(language);

    localStorage.setItem('nexora-language', language);

    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  translate(key: string, params?: Record<string, string>): string {

    const currentTranslations = this.translations.getValue();

    if (!currentTranslations) {
      return key;
    }

    const translation = currentTranslations[key];

    if (!translation) {
      console.warn('Missing translation key:', key);
      return key;
    }

    if (params) {
      return this.replaceParameters(translation, params);
    }

    return translation;
  }

  private replaceParameters(text: string, params: Record<string, string>): string {
    return text.replace(/\{\{(\w+)\}\}/g, (_, k) => params[k] ?? `{{${k}}}`);
  }

  getCurrentLanguageOption(): LanguageOption {
    return this.languages.find(l => l.code === this.currentLanguage())!;
  }
}