import { Component } from '@angular/core';

@Component({
  selector: 'app-kurdistan-flag',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" class="kurdistan-flag" [class]="customClass">
      <!-- Red stripe -->
      <rect width="300" height="66.67" fill="#CD2E3A"/>
      <!-- White stripe -->
      <rect y="66.67" width="300" height="66.67" fill="white"/>
      <!-- Green stripe -->
      <rect y="133.33" width="300" height="66.67" fill="#009739"/>
      <!-- Yellow sun with 21 rays -->
      <g transform="translate(150, 100)">
        <!-- Sun rays -->
        <g fill="#FCD116">
          <!-- Main rays -->
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(0)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(17.14)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(34.29)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(51.43)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(68.57)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(85.71)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(102.86)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(120)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(137.14)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(154.29)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(171.43)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(188.57)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(205.71)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(222.86)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(240)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(257.14)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(274.29)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(291.43)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(308.57)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(325.71)"/>
          <rect x="-2" y="-60" width="4" height="120" transform="rotate(342.86)"/>
        </g>
        <!-- Central circle -->
        <circle r="35" fill="#FCD116"/>
        <!-- Inner design elements -->
        <g fill="#CD2E3A">
          <!-- Center circle -->
          <circle r="8"/>
          <!-- Flame-like shapes -->
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(0)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(45)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(90)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(135)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(180)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(225)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(270)"/>
          <path d="M 0,-30 L -3,-20 L 0,-25 L 3,-20 Z" transform="rotate(315)"/>
        </g>
      </g>
    </svg>
  `,
  styles: [`
    .kurdistan-flag {
      width: 1.2em;
      height: 0.8em;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  `]
})
export class KurdistanFlagComponent {
  customClass = '';
}
