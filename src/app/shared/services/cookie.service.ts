import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface CookieConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private readonly CONSENT_KEY = 'nexora_cookie_consent';
  private readonly API_BASE_URL = '/api'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  hasConsent(): boolean {
    return localStorage.getItem(this.CONSENT_KEY) !== null;
  }

  getConsent(): CookieConsentSettings | null {
    const consent = localStorage.getItem(this.CONSENT_KEY);
    return consent ? JSON.parse(consent) : null;
  }

  setConsent(settings: CookieConsentSettings): void {
    localStorage.setItem(this.CONSENT_KEY, JSON.stringify(settings));
    this.syncWithBackend(settings).subscribe();
  }

  private syncWithBackend(settings: CookieConsentSettings): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/cookie-consent`, settings);
  }

  canUseAnalytics(): boolean {
    const consent = this.getConsent();
    return consent ? consent.analytics : false;
  }

  canUseMarketing(): boolean {
    const consent = this.getConsent();
    return consent ? consent.marketing : false;
  }

  canUseFunctional(): boolean {
    const consent = this.getConsent();
    return consent ? consent.functional : false;
  }

  withdrawConsent(): void {
    localStorage.removeItem(this.CONSENT_KEY);
    // Optionally notify backend
    this.http.delete(`${this.API_BASE_URL}/cookie-consent`).subscribe();
  }
}
