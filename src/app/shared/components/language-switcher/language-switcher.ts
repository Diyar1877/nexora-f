import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, LanguageOption } from '../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  private translationService = inject(TranslationService);

  isOpen = false;

  languages = this.translationService.languages;

  constructor() {
    document.addEventListener('click', (event) => {
      if (!event.target || !(event.target as HTMLElement).closest('.language-switcher')) {
        this.isOpen = false;
      }
    });
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: LanguageOption): void {
    this.translationService.setLanguage(language.code);
    this.isOpen = false;
  }

  getCurrentLanguage(): LanguageOption {
    return this.translationService.getCurrentLanguageOption();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}