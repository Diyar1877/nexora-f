import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';

@Component({
    selector: 'app-services-overview',
    standalone: true,
    imports: [CommonModule, RouterLink, Button],
    templateUrl: './services-overview.html',
    styleUrl: './services-overview.scss'
})
export class ServicesOverview { }
