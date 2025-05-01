import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGamesService {
  constructor(private httpClient: HttpClient) {}
  getGames(page: number, platform: string, value: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}/games?page=${page}&platform=${platform}&sort=${value}`
    );
  }
}
