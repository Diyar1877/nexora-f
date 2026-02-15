import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../shared/services/translation.service';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-services-overview',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './services-overview.html',
    styleUrl: './services-overview.scss'
})
export class ServicesOverview {
    openIndex: number | null = null;

    constructor(private translationService: TranslationService) {}

    get expertiseItems() {
        const lang = this.translationService.getCurrentLanguage();
        
        if (lang === 'de') {
            return [
                {
                    title: 'Web-Entwicklung',
                    description: 'Moderne Webanwendungen mit Angular, React und Vue.js — performant, skalierbar und wartbar.'
                },
                {
                    title: 'Mobile Apps',
                    description: 'Native und Cross-Platform Apps für iOS und Android, die Ihre Nutzer begeistern.'
                },
                {
                    title: 'Cloud & Infrastructure',
                    description: 'Skalierbare Cloud-Architekturen, CI/CD-Pipelines und automatisierte Deployments auf AWS, Azure oder GCP.'
                },
                {
                    title: 'UI/UX Design',
                    description: 'Nutzerfreundliche Interfaces, die konvertieren — von der Konzeption bis zum Pixel-perfekten Design.'
                },
                {
                    title: 'Consulting & Strategie',
                    description: 'Technische Beratung, Architektur-Reviews und strategische Planung für Ihr digitales Vorhaben.'
                }
            ];
        } else {
            return [
                {
                    title: 'Web Development',
                    description: 'Modern web applications with Angular, React and Vue.js — performant, scalable and maintainable.'
                },
                {
                    title: 'Mobile Apps',
                    description: 'Native and cross-platform apps for iOS and Android that delight your users.'
                },
                {
                    title: 'Cloud & Infrastructure',
                    description: 'Scalable cloud architectures, CI/CD pipelines and automated deployments on AWS, Azure or GCP.'
                },
                {
                    title: 'UI/UX Design',
                    description: 'User-friendly interfaces that convert — from concept to pixel-perfect design.'
                },
                {
                    title: 'Consulting & Strategy',
                    description: 'Technical consulting, architecture reviews and strategic planning for your digital project.'
                }
            ];
        }
    }

    toggle(index: number): void {
        this.openIndex = this.openIndex === index ? null : index;
    }
}
