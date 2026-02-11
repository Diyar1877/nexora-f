import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-for-companies',
  standalone: true,
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './for-companies.html',
  styleUrl: './for-companies.scss'
})
export class ForCompanies { }
