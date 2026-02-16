import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation.service';
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

    constructor(public t: TranslationService) {}

    get expertiseItems() {
        return [
            { title: this.t.t('home.expertise.item1.title'), description: this.t.t('home.expertise.item1.desc') },
            { title: this.t.t('home.expertise.item2.title'), description: this.t.t('home.expertise.item2.desc') },
            { title: this.t.t('home.expertise.item3.title'), description: this.t.t('home.expertise.item3.desc') },
            { title: this.t.t('home.expertise.item4.title'), description: this.t.t('home.expertise.item4.desc') },
            { title: this.t.t('home.expertise.item5.title'), description: this.t.t('home.expertise.item5.desc') }
        ];
    }

    toggle(index: number): void {
        this.openIndex = this.openIndex === index ? null : index;
    }
}
