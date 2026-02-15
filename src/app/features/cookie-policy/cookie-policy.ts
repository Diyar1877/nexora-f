import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.scss'
})
export class CookiePolicy { }
