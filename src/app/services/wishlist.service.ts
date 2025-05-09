import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ApiLoginService } from './api-login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(
    private httpClient: HttpClient,
    private _apiLoginService: ApiLoginService,
    private router: Router
  ) {}

  addToWishlist(gameId: string): Observable<any> {
    const token = this._apiLoginService.getToken();

    if (!token) {
      this.router.navigate(['/login']);
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

  showGamesInWishlist(): Observable<any> {
    const token = this._apiLoginService.getToken();

    if (!token) this.router.navigate(['/login']);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': token,
    });

    return this.httpClient.get(`${environment.baseUrl}/users/wishlist`, {
      headers,
    });
  }

  getGameById(gameId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/games/game/${gameId}`);
  }

  removeGameFromWishlist(gameId: string): Observable<any> {
    const token = this._apiLoginService.getToken();

    if (!token) {
      this.router.navigate(['/login']);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': token,
    });

    return this.httpClient.delete(
      `${environment.baseUrl}/users/wishlist/${gameId}`,
      { headers }
    );
  }
}
