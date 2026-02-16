import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss'
})
export class Privacy { }
