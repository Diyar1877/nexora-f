import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../button/button';
import { TranslationService, Language } from '../../../core/services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, Button, TranslatePipe],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {
    isScrolled = signal(false);
    isMenuOpen = signal(false);
    isLangOpen = signal(false);

    constructor(public t: TranslationService) {}

    @HostListener('window:scroll')
    onWindowScroll() {
        this.isScrolled.set(window.scrollY > 20);
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest('.lang-switcher')) {
            this.isLangOpen.set(false);
        }
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
        if (this.isMenuOpen()) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMenu() {
        this.isMenuOpen.set(false);
        document.body.style.overflow = '';
    }

    toggleLang(event: Event) {
        event.stopPropagation();
        this.isLangOpen.update(v => !v);
    }

    setLang(lang: Language) {
        this.t.setLanguage(lang);
        this.isLangOpen.set(false);
    }
}
