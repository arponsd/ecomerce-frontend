import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  authService = inject(AuthService);

  constructor(private http: HttpClient) { }

  init(): Observable<void> {
    return this.http.get<{ data: any }>('api/user/startup').pipe(
      map(data => {
        const userData = data.data.user;

        if( userData) {
          this.setUser(userData)
        }


        // Perform any necessary data processing here
        return;
      }),
      catchError(error => {
        console.error('Failed to load initial data', error);
        return of(void 0); // Return an empty observable on error
      })
    );
  };

  setUser(user: any):void {
    this.authService.loginUser.set({
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
      isBlocked: user.isBlocked
    })
  }


}
