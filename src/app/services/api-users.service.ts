import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private httpClient: HttpClient) {}
  addUser(userData: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/users`, userData);
  }
}
