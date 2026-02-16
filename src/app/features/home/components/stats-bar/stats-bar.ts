import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-stats-bar',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './stats-bar.html',
    styleUrl: './stats-bar.scss'
})
export class StatsBar { }
