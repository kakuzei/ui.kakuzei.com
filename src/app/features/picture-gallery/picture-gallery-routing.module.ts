import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './components';
import { TagResolver } from './resolvers';

export const routes: Routes = [
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
