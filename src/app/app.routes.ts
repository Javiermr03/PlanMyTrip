import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./inicio-sesion/inicio-sesion.component').then((m) => m.InicioSesionComponent),
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
  {
    path: 'grupoFutbol',
    loadComponent: () => import('./grupo-fubol/grupo-fubol.component').then((m) => m.GrupoFubolComponent),
  },
  {
    path: 'miembrosFutbol',
    loadComponent: () => import('./miembros-futbol/miembros-futbol.component').then((m) => m.MiembrosFutbolComponent),
  },
  {
    path: 'añadirGrupo',
    loadComponent: () => import('./anadir-grupo/anadir-grupo.component').then((m) => m.AnadirGrupoComponent),
  },
  {
    path: 'añadirMiembro',
    loadComponent: () => import('./anadir-miembro/anadir-miembro.component').then((m) => m.AnadirMiembroComponent),
  },
  {
    path: 'editarMiembros',
    loadComponent: () => import('./editar-miembros/editar-miembros.component').then((m) => m.EditarMiembrosComponent),
  },
];
