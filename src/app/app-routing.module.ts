import { NgModule } from '@angular/core';
import { LoadChildrenCallback, RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'src/app/core';
import { PictureGalleryModule } from 'src/app/features/picture-gallery/picture-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('src/app/features/picture-gallery/picture-gallery.module').then((module) => module.PictureGalleryModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
