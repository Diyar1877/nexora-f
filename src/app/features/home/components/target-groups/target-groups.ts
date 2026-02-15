import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../shared/services/translation.service';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-target-groups',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './target-groups.html',
    styleUrl: './target-groups.scss'
})
export class TargetGroups {
    constructor(private translationService: TranslationService) {}

    get testimonials() {
        const lang = this.translationService.getCurrentLanguage();
        
        if (lang === 'de') {
            return [
                {
                    quote: 'Nexora hat uns innerhalb von 48 Stunden zwei hervorragende Angular-Entwickler vermittelt. Die Integration ins Team war nahtlos.',
                    name: 'Michael Bauer',
                    role: 'CTO',
                    company: 'TechVenture GmbH'
                },
                {
                    quote: 'Die Qualität der Zusammenarbeit übertrifft alles, was wir bisher mit Freelancern erlebt haben. Klare Kommunikation, verlässliche Ergebnisse.',
                    name: 'Sandra Klein',
                    role: 'Head of Engineering',
                    company: 'FinBridge AG'
                },
                {
                    quote: 'Endlich ein Partner, der versteht, was deutsche Unternehmen brauchen: Rechtssicherheit, Qualität und echtes Engagement.',
                    name: 'Thomas Weber',
                    role: 'Geschäftsführer',
                    company: 'DataFlow Solutions'
                }
            ];
        } else {
            return [
                {
                    quote: 'Nexora provided us with two excellent Angular developers within 48 hours. The integration into the team was seamless.',
                    name: 'Michael Bauer',
                    role: 'CTO',
                    company: 'TechVenture GmbH'
                },
                {
                    quote: 'The quality of collaboration exceeds everything we have experienced with freelancers so far. Clear communication, reliable results.',
                    name: 'Sandra Klein',
                    role: 'Head of Engineering',
                    company: 'FinBridge AG'
                },
                {
                    quote: 'Finally a partner who understands what German companies need: legal security, quality and real commitment.',
                    name: 'Thomas Weber',
                    role: 'CEO',
                    company: 'DataFlow Solutions'
                }
            ];
        }
    }
}
