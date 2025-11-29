import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'morning',
    loadComponent: () =>
      import('./components/dhikr-list/dhikr-list').then((m) => m.DhikrListComponent),
    data: { category: 'morning' },
  },
  {
    path: 'evening',
    loadComponent: () =>
      import('./components/dhikr-list/dhikr-list').then((m) => m.DhikrListComponent),
    data: { category: 'evening' },
  },
  {
    path: 'prayer',
    loadComponent: () =>
      import('./components/dhikr-list/dhikr-list').then((m) => m.DhikrListComponent),
    data: { category: 'prayer' },
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./components/favorites/favorites').then((m) => m.FavoritesComponent),
  },
  {
    path: 'tasbih',
    loadComponent: () =>
      import('./components/tasbih-counter/tasbih-counter').then((m) => m.TasbihCounterComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings').then((m) => m.SettingsComponent),
  },
  {
    path: 'dhikr/:id',
    loadComponent: () =>
      import('./components/dhikr-detail/dhikr-detail').then((m) => m.DhikrDetailComponent),
  },
];
