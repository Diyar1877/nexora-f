  import { Component, HostListener } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { HttpClient } from '@angular/common/http';
  import { FindOptionPipe } from '../../shared/pipes/find-option.pipe';
  import { TranslatePipe } from '../../shared/pipes/translate.pipe';
  import { TranslationService } from '../../shared/services/translation.service';

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

    subjectOptions: { value: string; label: string; icon: string }[] = [];

    constructor(private http: HttpClient, private translationService: TranslationService) {
      this.initializeSubjectOptions();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      this.isDropdownOpen = false;
    }

    private initializeSubjectOptions(): void {
      this.subjectOptions = [
        { value: 'company', label: this.translateText('contact.subjectCompany'), icon: '' },
        { value: 'developer', label: this.translateText('contact.subjectDeveloper'), icon: '' },
        { value: 'other', label: this.translateText('contact.subjectOther'), icon: '' }
      ];
    }

    toggleDropdown(event: Event) {
      event.stopPropagation();
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    selectOption(value: string) {
      this.subject = value;
      this.isDropdownOpen = false;
    }

    private translateText(key: string): string {
      return this.translationService.translate(key);
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

      this.http.post('http://localhost:8000/api/contact', payload).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.resetForm();
        },
        error: (error) => {
          this.isSubmitting = false;
          if (error.error && error.error.details) {
            this.submitError = this.translateText('contact.errorDetails') + error.error.details;
          } else {
            this.submitError = this.translateText('contact.errorGeneric');
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
