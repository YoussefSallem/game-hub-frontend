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
  storeTokenInCookie(token: string) {
    this.cookieService.set('authToken', token, {
      secure: true,
      sameSite: 'Lax',
      path: '/',
    });
  }
}
