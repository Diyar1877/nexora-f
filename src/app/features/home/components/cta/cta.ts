import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [RouterLink, TranslatePipe],
    templateUrl: './cta.html',
    styleUrl: './cta.scss'
})
export class Cta { }
