import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './components';

export const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' }
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
