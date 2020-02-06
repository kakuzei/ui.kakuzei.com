import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from './components';
import { PictureGalleryRoutingModule } from './picture-gallery-routing.module';
import { resolvers } from './resolvers';
import { services } from './services';

@NgModule({
  imports: [CommonModule, PictureGalleryRoutingModule],
  declarations: components,
  providers: [...resolvers, ...services]
})
export class PictureGalleryModule {}
