import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../../services/cookie.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss'
})
export class CookieConsent implements OnInit {
  showConsent = false;
  consentSettings = {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  };

  private cookieService = inject(CookieService);

  ngOnInit() {
    if (!this.cookieService.hasConsent()) {
      this.showConsent = true;
    }
  }

  acceptAll() {
    this.consentSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    this.saveConsent();
  }

  acceptSelected() {
    this.saveConsent();
  }

  saveConsent() {
    this.cookieService.setConsent(this.consentSettings);
    this.showConsent = false;
  }

  updateConsent(type: keyof typeof this.consentSettings, event: Event) {
    const target = event.target as HTMLInputElement;
    this.consentSettings[type] = target.checked;
  }

  openSettings() {
    // Could expand to show detailed settings
  }
}
