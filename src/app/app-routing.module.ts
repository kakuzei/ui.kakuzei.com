import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from 'app/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: 'app/features/picture-gallery/picture-gallery.module#PictureGalleryModule'
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
