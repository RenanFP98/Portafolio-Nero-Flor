import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing').then((m) => m.Landing),
  },
  {
    path: 'artist/:id',
    loadComponent: () => import('./portfolio').then((m) => m.Portfolio),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
