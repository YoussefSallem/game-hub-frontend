import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiResetPasswordService {
  constructor(private httpClient: HttpClient) {}
  resetPassword(userNewPassword: object, token: string): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/reset-password/${token}`,
      userNewPassword
    );
  }
}
