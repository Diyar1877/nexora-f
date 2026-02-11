import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink, Button],
    templateUrl: './hero.html',
    styleUrl: './hero.scss'
})
export class Hero { }
