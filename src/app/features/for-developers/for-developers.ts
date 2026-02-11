import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-for-developers',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-3xl">
      <h1>Für Entwickler</h1>
      <p>Hier entsteht die Seite für Entwickler und Bewerber.</p>
    </div>
  `
})
export class ForDevelopers { }
