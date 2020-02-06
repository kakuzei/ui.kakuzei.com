import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { components, LayoutComponent } from './components';
import { services } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: components,
  providers: services,
  exports: [LayoutComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded');
    }
  }
}
