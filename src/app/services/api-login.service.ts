import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}
  loginUser(loginData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/auth`, loginData);
  }
  storeTokenInCookie(token: string, rememberMe: boolean) {
    // add 30 days expiration date for remember me feature
    const expirationDate = rememberMe
      ? new Date(Date.now() + 30 * 24 * 60 * 60 * 100)
      : undefined;

    this.cookieService.set('authToken', token, {
      secure: true,
      sameSite: 'Lax',
      path: '/',
      expires: expirationDate,
    });

    // Storing rememberMe preference in a separate cookie
    this.cookieService.set('rememberMe', rememberMe.toString(), {
      secure: true,
      path: '/',
      sameSite: 'Lax',
      expires: expirationDate,
    });
  }

  // get token from cookie
  getToken(): string {
    return this.cookieService.get('authToken');
  }

  // Check if remember me was selected
  getRememberMe(): boolean {
    return this.cookieService.get('rememberMe') === 'true';
  }

  // clear all auth cookies on logout
  // added path to delete the cookie from all the paths
  logout(): void {
    this.cookieService.delete('authToken', '/');
    this.cookieService.delete('rememberMe', '/');
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('authToken');
  }
}
