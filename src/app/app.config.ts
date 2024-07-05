import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { defaultInterceptor } from './interceptor/default.interceptor';
import { StartupService } from './services/startup.service';
import { Observable } from 'rxjs';


export function StartupServiceFactory (startupService: StartupService): () => Observable<void> {
  return () => startupService.init();
}

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withInterceptors([defaultInterceptor])), ...APPINIT_PROVIDES]
};
