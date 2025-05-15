import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  private loginState = new BehaviorSubject<boolean>(false);
  logoutEvent = new EventEmitter<void>();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.loginState.next(this.isLoggedIn());
  }

  loginUser(loginData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/auth`, loginData);
  }

  storeTokenInCookie(token: string, rememberMe: boolean) {
    // add 30 days expiration date for remember me feature
    const expirationDate = rememberMe
      ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
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
    this.loginState.next(true);
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
  // to delete the cookie from all the paths
  logout(): void {
    this.cookieService.delete('authToken', '/');
    this.cookieService.delete('rememberMe', '/');
    // this.logoutEvent.emit();
    this.loginState.next(false);
    this.router.navigate(['/login']);
  }

  getLoginState() {
    return this.loginState.asObservable();
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('authToken');
  }

  isValidToken(): boolean {
    try {
      // const token = this.getToken();
      const token = this.getToken();

      if (!token) return false;
      const decodedToken: any = jwtDecode(token);
      if (!decodedToken._id) return false;
      return true;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  }
}
