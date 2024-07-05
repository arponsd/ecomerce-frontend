import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { startWith } from 'rxjs';

export const defaultInterceptor: HttpInterceptorFn = (req, next) => {
let url = req.url;
const baseUrl = environment.api.baseUrl;

if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('./') && !url.startsWith('../')) {
  url = `${baseUrl}/$${url}`;
}


  return next(req);
};
