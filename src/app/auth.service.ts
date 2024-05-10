import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = '/api/auth';
  private userRole!: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        const { token, role } = response;
        localStorage.setItem('authToken', token);
        this.userRole = role;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  logout(): Observable<any> {
    localStorage.removeItem('authToken');
    this.userRole = '';
  
    return this.http.post<any>(`${this.apiUrl}/logout`, {}).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  }

  getUserRole(): string {
    return 'instructor'
  }
}