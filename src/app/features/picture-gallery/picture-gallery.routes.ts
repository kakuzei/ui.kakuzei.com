import { Routes } from '@angular/router';

import { NavComponent, PageComponent } from './components';
import { TagResolver } from './resolvers';

export const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    outlet: 'nav'
  },
  {
    path: '',
    component: PageComponent,
    pathMatch: 'full'
  },
  {
    path: 'tags/:id',
    component: PageComponent,
    resolve: {
      tag: TagResolver
    }
  }
];
