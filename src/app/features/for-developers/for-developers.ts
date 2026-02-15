import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-for-developers',
    standalone: true,
    imports: [CommonModule, RouterLink, Button, TranslatePipe],
    templateUrl: './for-developers.html',
    styleUrl: './for-developers.scss'
})
export class ForDevelopers { }
