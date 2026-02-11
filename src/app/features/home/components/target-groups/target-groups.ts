import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';

@Component({
    selector: 'app-target-groups',
    standalone: true,
    imports: [CommonModule, RouterLink, Button],
    templateUrl: './target-groups.html',
    styleUrl: './target-groups.scss'
})
export class TargetGroups { }
