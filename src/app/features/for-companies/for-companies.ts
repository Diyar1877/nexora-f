import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-for-companies',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-3xl">
      <h1>Für Unternehmen</h1>
      <p>Hier entsteht die Seite für unsere Geschäftskunden.</p>
    </div>
  `
})
export class ForCompanies { }
