import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-process-overview',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './process-overview.html',
    styleUrl: './process-overview.scss'
})
export class ProcessOverview { }
