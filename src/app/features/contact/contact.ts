import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  privacyAccepted = false;

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private http: HttpClient) { }

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
      subject: this.subject,
      message: this.message
    };

    this.http.post('http://localhost:8000/api/contact', payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.';
        console.error('Submission error:', error);
      }
    });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.privacyAccepted = false;
  }
}
