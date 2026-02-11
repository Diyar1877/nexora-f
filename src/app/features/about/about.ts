import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About { }
