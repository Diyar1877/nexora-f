import { Component, HostListener } from '@angular/core';
import { FindOptionPipe } from '../../shared/pipes/find-option.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Button, FindOptionPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  phoneNumber = '';
  subject = '';
  message = '';
  privacyAccepted = false;

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  isDropdownOpen = false;
  subjectTouched = false;

  subjectOptions = [
    { value: 'company', label: 'Projektanfrage (Unternehmen)', icon: '', description: 'Sie möchten ein Projekt mit uns starten' },
    { value: 'developer', label: 'Bewerbung (Entwickler)', icon: '', description: 'Sie möchten Teil unseres Teams werden' },
    { value: 'other', label: 'Sonstiges', icon: '', description: 'Allgemeine Anfragen & Feedback' }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.closeDropdown();
  }

  constructor(private http: HttpClient) { }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
    this.subjectTouched = true;
  }

  selectOption(value: string) {
    this.subject = value;
    this.isDropdownOpen = false;
    this.subjectTouched = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  submit() {
    if (!this.privacyAccepted) {
      this.submitError = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      subject: this.subject,
      message: this.message
    };

    this.http.post('http://localhost:8085/api/contact', payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.error && error.error.details) {
          this.submitError = `Fehler: ${error.error.details}`;
        } else {
          this.submitError = 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.';
        }
        console.error('Submission error:', error);
      }
    });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.subject = '';
    this.message = '';
    this.privacyAccepted = false;
    this.isDropdownOpen = false;
    this.subjectTouched = false;
  }
}
