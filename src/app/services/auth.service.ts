import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9402/api/auth'; // Replace with your Spring Boot application URL

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signin`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    // Clear the user's authentication token from local storage or cookies
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    //Check if the user's authentication token is present in local storage or cookies
    const token = localStorage.getItem('token');
    return token !== null;
    //return true;
  }


  getUserRole(): string {
    //return localStorage.getItem('userRole') || ''; // Return user role from localStorage
    return 'learner'
  }
}
