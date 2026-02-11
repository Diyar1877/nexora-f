import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-3xl">
      <h1>Über uns</h1>
      <p>Hier erfahren Sie mehr über Nexora Solutions.</p>
    </div>
  `
})
export class About { }
