import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { components, LayoutComponent } from './components';
import { LayoutService } from './services';

@NgModule({
  declarations: components,
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule],
  providers: [LayoutService, provideHttpClient(withInterceptorsFromDi())]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded');
    }
  }
}
