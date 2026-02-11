import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact { }
