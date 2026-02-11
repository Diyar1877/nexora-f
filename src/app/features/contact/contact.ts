import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-3xl">
      <h1>Kontakt</h1>
      <p>Treten Sie mit uns in Verbindung.</p>
    </div>
  `
})
export class Contact { }
