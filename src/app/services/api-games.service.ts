import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGamesService {
  constructor(private httpClient: HttpClient) {}

  getGames(
    page: number,
    platform: string,
    value: string,
    genre?: string
  ): Observable<any> {
    let url = `${environment.baseUrl}/games?page=${page}&platform=${platform}&sort=${value}`;
    if (genre) {
      url += `&genres=${genre}`;
    }
    return this.httpClient.get(url);
  }

  getGenres(): Observable<any> {
    return this.httpClient.get(`${environment.rawgUrl}/genres`, {
      params: {
        key: environment.apiKey,
      },
    });
  }

  getGamesByGenre(genreId: string, page: number = 1): Observable<any> {
    return this.httpClient.get(
      `${environment.rawgUrl}/games?genres=${genreId}&page=${page}`,
      {
        params: {
          key: environment.apiKey,
        },
      }
    );
  }
}
