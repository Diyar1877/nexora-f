import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss'
})
export class Imprint { }
