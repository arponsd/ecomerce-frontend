import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser = signal<any>({});

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`api/user/login`, data, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.get('api/user/logout', {withCredentials: true});
  }
}
