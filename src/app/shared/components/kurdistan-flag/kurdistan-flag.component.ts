import { Component } from '@angular/core';

@Component({
  selector: 'app-kurdistan-flag',
  standalone: true,
  template: `
  <svg viewBox="0 0 300 200" class="kurdistan-flag">

    <!-- Stripes -->
    <rect width="300" height="66.666" fill="#EF3340"/>
    <rect y="66.666" width="300" height="66.666" fill="#FFFFFF"/>
    <rect y="133.333" width="300" height="66.666" fill="#009639"/>

    <!-- Sun -->
    <g transform="translate(150,100)">

      <!-- 21 triangular rays -->
      <g fill="#FCD116">
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(0)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(17.142857)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(34.285714)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(51.428571)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(68.571428)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(85.714285)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(102.857142)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(120)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(137.142857)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(154.285714)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(171.428571)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(188.571428)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(205.714285)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(222.857142)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(240)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(257.142857)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(274.285714)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(291.428571)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(308.571428)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(325.714285)"/>
        <polygon points="0,-70 8,-35 -8,-35" transform="rotate(342.857142)"/>
      </g>

      <!-- Center circle -->
      <circle r="30" fill="#FCD116"/>

    </g>
  </svg>
  `,
  styles: [`
    .kurdistan-flag {
      width: 1.2em;
      height: 0.8em;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
  `]
})
export class KurdistanFlagComponent {}