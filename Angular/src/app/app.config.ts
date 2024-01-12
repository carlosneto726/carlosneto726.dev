import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy,
    }, 
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    provideClientHydration()
  ]
};
