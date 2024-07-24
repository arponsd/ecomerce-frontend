import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  // get(): Observable<any> {
  //   return this.http.get<{data: any}>('api/product/index');
  // }

  products = toSignal(this.http.get<{data: any}>('api/product/index'), {initialValue : {data: []}})
}
