import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  phoneNumber = '';
  message = '';

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private http: HttpClient) { }

  submit() {
    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      subject: 'general',
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
    this.message = '';
  }
}
