import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../button/button';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, Button, LanguageSwitcher, TranslatePipe],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {
    isScrolled = signal(false);
    isMenuOpen = signal(false);

    @HostListener('window:scroll')
    onWindowScroll() {
        this.isScrolled.set(window.scrollY > 20);
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
        // Prevent body scroll when menu is open
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
}
