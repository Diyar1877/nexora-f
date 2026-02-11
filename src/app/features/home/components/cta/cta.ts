import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [CommonModule, RouterLink, Button],
    templateUrl: './cta.html',
    styleUrl: './cta.scss'
})
export class Cta { }
