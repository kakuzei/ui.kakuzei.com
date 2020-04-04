import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/core';
import { PictureGalleryModule } from 'app/features/picture-gallery/picture-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: (): Promise<PictureGalleryModule> =>
      import('app/features/picture-gallery/picture-gallery.module').then((module) => module.PictureGalleryModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
