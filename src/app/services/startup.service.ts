import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient, private authService: AuthService) {
    this.init();
  }

  init(): Observable<void> {
    return this.http.get<{ data: any }>('api/user/startup').pipe(
      map(response => {
        const userData = response.data.user;

        if (userData) {
          this.setUser(userData);
        }
        return;
      }),
      catchError(error => {
        console.error('Failed to load initial data', error);
        return of(void 0); // Return an empty observable on error
      })
    );
  }

  setUser(user: any): void {
    this.authService.loginUser.set({
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
      isBlocked: user.isBlocked
    });
  }
}
