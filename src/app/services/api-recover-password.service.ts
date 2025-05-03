import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRecoverPasswordService {
  constructor(private httpClient: HttpClient) {}
  recoverPassword(userEmail: any): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/auth/forgot-password`,
      userEmail
    );
  }
}
