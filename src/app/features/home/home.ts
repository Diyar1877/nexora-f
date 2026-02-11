import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Technologies } from './components/technologies/technologies';
import { TargetGroups } from './components/target-groups/target-groups';
import { Cta } from './components/cta/cta';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        Hero,
        Services,
        Technologies,
        TargetGroups,
        Cta
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home { }
