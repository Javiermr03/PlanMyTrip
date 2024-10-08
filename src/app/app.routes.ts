import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movil',
    loadComponent: () => import('./movil/movil.component').then((m) => m.movilComponent),
  },
  {
    path: 'grupos',
    loadComponent: () => import('./grupos/grupos.component').then((m) => m.GruposComponent),
  },
  {
    path: 'actividades',
    loadComponent: () => import('./actividades/actividades.component').then((m) => m.ActividadesComponent),
  },
  {
    path: 'votaciones',
    loadComponent: () => import('./votaciones/votaciones.component').then((m) => m.VotacionesComponent),
  },
  {
    path: 'costes',
    loadComponent: () => import('./costes/costes.component').then((m) => m.CostesComponent),
  },
];
