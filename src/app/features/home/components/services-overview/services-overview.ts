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
        return [
            {
                title: this.translationService.translate('services.web.title'),
                description: this.translationService.translate('services.web.description')
            },
            {
                title: this.translationService.translate('services.mobile.title'),
                description: this.translationService.translate('services.mobile.description')
            },
            {
                title: this.translationService.translate('services.cloud.title'),
                description: this.translationService.translate('services.cloud.description')
            },
            {
                title: this.translationService.translate('services.design.title'),
                description: this.translationService.translate('services.design.description')
            },
            {
                title: this.translationService.translate('services.consulting.title'),
                description: this.translationService.translate('services.consulting.description')
            }
        ];
    }

    toggle(index: number): void {
        this.openIndex = this.openIndex === index ? null : index;
    }
}
