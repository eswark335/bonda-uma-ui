import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'social-activities', loadChildren: () => import('./social-activities/social-activities.module').then(m => m.SocialActivitiesModule) },
  { path: 'local-development', loadChildren: () => import('./local-development/local-development.module').then(m => m.LocalDevelopmentModule) },
  { path: 'support', loadComponent: () => import('./support/support.component').then(c => c.SupportComponent) },
  { path: 'dashboard', loadChildren: () => import('./support/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: '' }
];
