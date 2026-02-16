import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { Technologies } from './components/technologies/technologies';
import { StatsBar } from './components/stats-bar/stats-bar';
import { ServicesOverview } from './components/services-overview/services-overview';
import { ProcessOverview } from './components/process-overview/process-overview';
import { Cta } from './components/cta/cta';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        Hero,
        Technologies,
        StatsBar,
        ServicesOverview,
        ProcessOverview,
        Cta
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home { }
