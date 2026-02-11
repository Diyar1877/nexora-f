import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.html',
    styleUrl: './button.scss'
})
export class Button {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() variant: 'primary' | 'secondary' | 'white' = 'primary';
    @Input() disabled = false;
    @Input() fullWidth = false;
}
