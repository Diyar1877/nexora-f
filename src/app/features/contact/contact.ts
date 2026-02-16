import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FindOptionPipe } from '../../shared/pipes/find-option.pipe';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FindOptionPipe, TranslatePipe],
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

  constructor(private http: HttpClient, public t: TranslationService) { }

  get subjectOptions() {
    return [
      { value: 'company', label: this.t.t('contact.form.subjectCompany'), icon: '' },
      { value: 'developer', label: this.t.t('contact.form.subjectDeveloper'), icon: '' },
      { value: 'other', label: this.t.t('contact.form.subjectOther'), icon: '' }
    ];
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isDropdownOpen = false;
  }

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

    this.http.post('/api/contact', payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.error && error.error.details) {
          this.submitError = `${this.t.t('contact.form.errorPrefix')} ${error.error.details}`;
        } else {
          this.submitError = this.t.t('contact.form.errorGeneric');
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
