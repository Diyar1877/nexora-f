import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-for-companies',
  standalone: true,
  imports: [CommonModule, RouterLink, Button, TranslatePipe] ,
  templateUrl: './for-companies.html',
  styleUrls: ['./for-companies.scss']
})
export class ForCompanies implements OnInit {
    faqIndex: number | null = null;
    faqs: any[] = [];

    constructor(private translationService: TranslationService) {}

    ngOnInit(): void {
        this.faqs = [
            {
                question: this.translationService.translate('companies.faq1Question'),
                answer: this.translationService.translate('companies.faq1Answer')
            },
            {
                question: this.translationService.translate('companies.faq2Question'),
                answer: this.translationService.translate('companies.faq2Answer')
            },
            {
                question: this.translationService.translate('companies.faq3Question'),
                answer: this.translationService.translate('companies.faq3Answer')
            },
            {
                question: this.translationService.translate('companies.faq4Question'),
                answer: this.translationService.translate('companies.faq4Answer')
            },
            {
                question: this.translationService.translate('companies.faq5Question'),
                answer: this.translationService.translate('companies.faq5Answer')
            },
            {
                question: this.translationService.translate('companies.faq6Question'),
                answer: this.translationService.translate('companies.faq6Answer')
            },
            {
                question: this.translationService.translate('companies.faq7Question'),
                answer: this.translationService.translate('companies.faq7Answer')
            },
            {
                question: this.translationService.translate('companies.faq8Question'),
                answer: this.translationService.translate('companies.faq8Answer')
            }
        ];
    }

    toggleFaq(index: number): void {
        this.faqIndex = this.faqIndex === index ? null : index;
    }
}
