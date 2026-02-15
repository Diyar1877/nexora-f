import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-overview',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services-overview.html',
    styleUrl: './services-overview.scss'
})
export class ServicesOverview {
    openIndex: number | null = null;

    expertiseItems = [
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

    toggle(index: number): void {
        this.openIndex = this.openIndex === index ? null : index;
    }
}
