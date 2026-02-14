import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-stats-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stats-bar.html',
    styleUrl: './stats-bar.scss'
})
export class StatsBar { }
