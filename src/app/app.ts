import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { CookieConsent } from './shared/components/cookie-consent/cookie-consent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'nexora-frontend';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Bei jeder Routenänderung zum Anfang scrollen
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
