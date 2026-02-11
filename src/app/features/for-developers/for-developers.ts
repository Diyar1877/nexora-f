import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';

@Component({
    selector: 'app-for-developers',
    standalone: true,
    imports: [CommonModule, RouterLink, Button],
    templateUrl: './for-developers.html',
    styleUrl: './for-developers.scss'
})
export class ForDevelopers { }
