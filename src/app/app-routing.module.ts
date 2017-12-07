import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/core';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: 'app/features/picture-gallery/picture-gallery.module#PictureGalleryModule' },
  { path: '**', redirectTo: '' }
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
