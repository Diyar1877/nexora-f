import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
    selector: 'app-technologies',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './technologies.html',
    styleUrl: './technologies.scss'
})
export class Technologies {
    services: { name: string, icon: SafeHtml }[] = [];

    constructor(private sanitizer: DomSanitizer) {
        // Helper to bypass security for SVGs since they are hardcoded and trusted
        const s = (html: string) => this.sanitizer.bypassSecurityTrustHtml(html);

        this.services = [
            {
                name: 'Angular',
                icon: s('<svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125 30L31.9 63.2L46.1 186.3L125 230L203.9 186.3L218.1 63.2L125 30Z" fill="#DD0031"/><path d="M125 30V52.2V153.4V230L203.9 186.3L218.1 63.2L125 30Z" fill="#C3002F"/><path d="M125 52.1L66.8 182.6H88.5L100.2 153.4H149.6L161.3 182.6H183L125 52.1ZM125 153.4H100.2H88.5H161.3H149.6H125Z" fill="white"/><path d="M125 52.1L149.6 113.6L161.3 142.8H183L125 52.1ZM125 80.9V113.6V142.8H149.6L125 80.9Z" fill="#DD0031"/><path d="M125 52.1L66.8 182.6H88.5L100.2 153.4H149.6L161.3 182.6H183L125 52.1ZM76.8 136.9L125 21.1L173.2 136.9H76.8Z" fill="white"/></svg>')
            },
            {
                name: 'Symfony',
                icon: s('<div style="width:30px;height:30px;background:#000;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:monospace;font-weight:bold;font-size:16px;">sf</div>')
            },
            {
                name: 'MySQL',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="#00758F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/><path d="M12 7v10"/><path d="M8 12h8"/></svg>')
            },
            {
                name: 'Frontend Development',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>')
            },
            {
                name: 'Backend Solutions',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>')
            },
            {
                name: 'Software Development',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>')
            },
            {
                name: 'UI/UX Design',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"></path></svg>')
            },
            {
                name: 'Cybersecurity',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>')
            },
            {
                name: 'Networking',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>')
            },
            {
                name: 'Data Science & AI',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>')
            },
            {
                name: 'Project Management',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>')
            },
            {
                name: 'Cloud Architecture',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>')
            },
            {
                name: 'Quality Assurance',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>')
            },
            {
                name: 'Graphic Design',
                icon: s('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>')
            }
        ];
    }
}
