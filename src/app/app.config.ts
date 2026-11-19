import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withXhr } from '@angular/common/http';

import routes from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withXhr()), provideRouter(routes)]
};
