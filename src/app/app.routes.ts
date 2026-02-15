import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'companies',
        loadComponent: () => import('./features/for-companies/for-companies').then(m => m.ForCompanies)
    },
    {
        path: 'developers',
        loadComponent: () => import('./features/for-developers/for-developers').then(m => m.ForDevelopers)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
    },
    {
        path: 'imprint',
        loadComponent: () => import('./features/imprint/imprint').then(m => m.Imprint)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./features/privacy/privacy').then(m => m.Privacy)
    },
    {
        path: 'agb',
        loadComponent: () => import('./features/agb/agb').then(m => m.Agb)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
