import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  init(): Observable<void> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map(data => {
        // Perform any necessary data processing here
        return;
      }),
      catchError(error => {
        console.error('Failed to load initial data', error);
        return of(void 0); // Return an empty observable on error
      })
    );
  }

}
