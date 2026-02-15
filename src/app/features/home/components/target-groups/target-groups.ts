import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-target-groups',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './target-groups.html',
    styleUrl: './target-groups.scss'
})
export class TargetGroups {
    testimonials = [
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
}
