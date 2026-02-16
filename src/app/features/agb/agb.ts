import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './agb.html',
  styleUrl: './agb.scss'
})
export class Agb { }
