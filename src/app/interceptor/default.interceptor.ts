import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const defaultInterceptor: HttpInterceptorFn = (req, next) => {
let url = req.url;
let token: any ;

if (isPlatformBrowser(inject(PLATFORM_ID))) {
  token = localStorage.getItem('token');
}
  function reAttachToken(req: HttpRequest<any>) {
    const authtoken = token;

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${authtoken}`
      }
    })
  }

const baseUrl = environment.api.baseUrl;

if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('./') && !url.startsWith('../')) {
  url = `${baseUrl}/${url}`;
}

let newReq = req.clone({url});
    newReq = reAttachToken(newReq)
  return next(newReq);
};
