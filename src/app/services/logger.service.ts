import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  log(...args: any) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(...args);
    }
  }
}
