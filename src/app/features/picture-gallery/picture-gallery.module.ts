import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureGalleryRoutingModule } from './picture-gallery-routing.module';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    PictureGalleryRoutingModule
  ],
  declarations: components,
})
export class PictureGalleryModule {}
