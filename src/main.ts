import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // add Google Analytics script to <head>
  const script = document.createElement('script');
  script.innerHTML = `(function(K,a,k,u,z,e,i){K['GoogleAnalyticsObject']=z;K[z]=K[z]||function(){
(K[z].q=K[z].q||[]).push(arguments)},K[z].l=1*new Date();e=a.createElement(k),
i=a.getElementsByTagName(k)[0];e.async=1;e.src=u;i.parentNode.insertBefore(e,i)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-19373816-2', 'auto');
ga('send', 'pageview');`;
  if (document.head) {
    document.head.appendChild(script);
  }
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(error => { console.error(error); }); // tslint:disable-line:no-console
