import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const defaultInterceptor: HttpInterceptorFn = (req, next) => {
  let url = req.url;
  let token: any = null;

    token = localStorage.getItem('token');

  function reAttachToken(req: HttpRequest<any>) {
    if (token) {
        return req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      return req;
    }
  }

  const baseUrl = environment.api.baseUrl;
  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('./') && !url.startsWith('../')) {
    url = `${baseUrl}/${url}`;
  }

  let newReq = req.clone({ url });
  newReq = reAttachToken(newReq);
  return next(newReq);
};
