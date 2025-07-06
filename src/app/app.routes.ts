import { Routes } from '@angular/router';

import { LayoutComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./features/picture-gallery/picture-gallery.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
