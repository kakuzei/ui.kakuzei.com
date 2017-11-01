import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent, PageComponent } from './components';
import { TagResolver } from './resolvers';

export const routes: Routes = [
  { path: '', component: NavComponent, outlet: 'nav' },
  { path: '', component: PageComponent, pathMatch: 'full' },
  { path: 'tags/:id', component: PageComponent, resolve: { tag: TagResolver } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PictureGalleryRoutingModule {}
