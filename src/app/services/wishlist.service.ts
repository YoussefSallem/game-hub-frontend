import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ApiLoginService } from './api-login.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(
    private httpClient: HttpClient,
    private _apiLoginService: ApiLoginService
  ) {}

  addToWishlist(gameId: string): Observable<any> {
    const token = this._apiLoginService.getToken();
    console.log('Token:', token);

    if (!token) {
      throw new Error('No token available');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': token,
    });

    return this.httpClient.put(
      `${environment.baseUrl}/users/wishlist`,
      {
        gameId,
      },
      { headers, observe: 'response' }
    );
  }
}
