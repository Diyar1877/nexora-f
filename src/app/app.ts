import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { TranslationService } from './shared/services/translation.service';
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

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private titleService: Title,
    private translationService: TranslationService
  ) {

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });

    this.updatePageTitle();

    this.translationService.languageChange$.subscribe(() => {
      this.updatePageTitle();
    });
  }

  private updatePageTitle(): void {
    const pageTitle = this.translationService.translate('page.title.home');
    this.titleService.setTitle(pageTitle);
  }
}