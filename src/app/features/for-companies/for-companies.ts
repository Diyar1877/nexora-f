import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-for-companies',
  standalone: true,
  imports: [CommonModule, RouterLink, Button, TranslatePipe] ,
  templateUrl: './for-companies.html',
  styleUrls: ['./for-companies.scss']
})
export class ForCompanies {
    faqIndex: number | null = null;

    faqs = [
        {
            question: 'Wie schnell können wir starten?',
            answer: 'In der Regel können wir innerhalb von 48 Stunden passende Entwickler vorschlagen. Nach Ihrer Auswahl beginnt das Onboarding sofort — meist sind Entwickler innerhalb einer Woche voll einsatzbereit.'
        },
        {
            question: 'Wie läuft die Kommunikation ab?',
            answer: 'Unsere Entwickler arbeiten in Ihrer Zeitzone und nutzen Ihre bestehenden Tools — ob Slack, Teams, Jira oder andere. Tägliche Stand-ups, wöchentliche Reports und ein persönlicher Ansprechpartner sorgen für volle Transparenz.'
        },
        {
            question: 'Sind die Verträge nach deutschem Recht?',
            answer: 'Ja, alle Verträge werden nach deutschem Recht geschlossen. Sie haben einen deutschen Vertragspartner mit voller Rechtssicherheit, DSGVO-Konformität und klaren Bedingungen.'
        },
        {
            question: 'Wie stellt ihr die Qualität sicher?',
            answer: 'Jeder Entwickler durchläuft einen mehrstufigen Auswahlprozess mit technischen Assessments und Referenzprüfungen. Während der Zusammenarbeit sorgen regelmäßige Code Reviews und Qualitätschecks für konstant hohe Standards.'
        },
        {
            question: 'Was passiert, wenn ein Entwickler nicht passt?',
            answer: 'Sollte die Zusammenarbeit nicht Ihren Erwartungen entsprechen, finden wir schnell einen passenden Ersatz — ohne zusätzliche Kosten und ohne lange Wartezeiten.'
        }
    ];

    toggleFaq(index: number): void {
        this.faqIndex = this.faqIndex === index ? null : index;
    }
}
