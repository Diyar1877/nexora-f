import { Injectable, signal, computed } from '@angular/core';
import { de } from '../i18n/de';
import { en } from '../i18n/en';
import { ku } from '../i18n/ku';
import { ar } from '../i18n/ar';
import { fr } from '../i18n/fr';
import { es } from '../i18n/es';

export type Language = 'de' | 'en' | 'ku' | 'ar' | 'fr' | 'es';

export interface LanguageOption {
    code: Language;
    label: string;
    flag: string;
    rtl: boolean;
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
    private translations: Record<Language, Record<string, string>> = { de, en, ku, ar, fr, es };

    readonly languages: LanguageOption[] = [
        { code: 'de', label: 'Deutsch', flag: '🇩🇪', rtl: false },
        { code: 'en', label: 'English', flag: '🇬🇧', rtl: false },
        { code: 'ku', label: 'کوردی سۆرانی', flag: '🇮🇶', rtl: true },
        { code: 'ar', label: 'العربية', flag: '🇸🇦', rtl: true },
        { code: 'fr', label: 'Français', flag: '🇫🇷', rtl: false },
        { code: 'es', label: 'Español', flag: '🇪🇸', rtl: false }
    ];

    currentLang = signal<Language>(this.getStoredLang());
    isRtl = computed(() => this.getCurrentLanguageOption().rtl);

    private getStoredLang(): Language {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('nexora-lang') as Language;
            if (stored && this.translations[stored]) {
                return stored;
            }
        }
        return 'de';
    }

    setLanguage(lang: Language): void {
        this.currentLang.set(lang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('nexora-lang', lang);
        }
        document.documentElement.lang = lang;
        if (this.getCurrentLanguageOption().rtl) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    getCurrentLanguageOption(): LanguageOption {
        return this.languages.find(l => l.code === this.currentLang()) || this.languages[0];
    }

    t(key: string): string {
        const lang = this.currentLang();
        return this.translations[lang]?.[key] || this.translations['de']?.[key] || key;
    }
}
