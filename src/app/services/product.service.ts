import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get<{data: any}>('api/product/index');
  }

  // products = toSignal(this.http.get<{data: any}>('api/product/index')
  // .pipe(
  //   catchError((err: any) => {
  //     console.error('Error fetching products:', err);
  //     return of({data: []});
  //   })
  // ), {initialValue : {data: []}});



  single(id: string) {
    return this.http.get<{data: any}>(`api/product/${id}`);
  }

}
