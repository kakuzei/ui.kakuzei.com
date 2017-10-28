import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
