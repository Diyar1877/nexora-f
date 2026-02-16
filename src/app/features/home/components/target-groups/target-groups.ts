import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-target-groups',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './target-groups.html',
    styleUrl: './target-groups.scss'
})
export class TargetGroups {
    constructor(public t: TranslationService) {}

    get testimonials() {
        return [
            {
                quote: this.t.t('home.testimonials.quote1'),
                name: 'Michael Bauer',
                role: this.t.t('home.testimonials.role1'),
                company: 'TechVenture GmbH'
            },
            {
                quote: this.t.t('home.testimonials.quote2'),
                name: 'Sandra Klein',
                role: this.t.t('home.testimonials.role2'),
                company: 'FinBridge AG'
            },
            {
                quote: this.t.t('home.testimonials.quote3'),
                name: 'Thomas Weber',
                role: this.t.t('home.testimonials.role3'),
                company: 'DataFlow Solutions'
            }
        ];
    }
}
