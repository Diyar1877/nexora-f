import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FindOptionPipe } from '../../shared/pipes/find-option.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FindOptionPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  phoneNumber = '';
  subject = '';
  message = '';

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  isDropdownOpen = false;

  subjectOptions = [
    { value: 'company', label: 'Projektanfrage (Unternehmen)', icon: '' },
    { value: 'developer', label: 'Bewerbung (Entwickler)', icon: '' },
    { value: 'other', label: 'Sonstiges', icon: '' }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isDropdownOpen = false;
  }

  constructor(private http: HttpClient) { }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(value: string) {
    this.subject = value;
    this.isDropdownOpen = false;
  }

  submit() {
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
    this.isDropdownOpen = false;
  }
}
