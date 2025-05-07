import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGamesService {
  constructor(private httpClient: HttpClient) {}

  getGameById(gameId: string | null): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/games/${gameId}`);
  }

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

  getGamesByGenre(
    genreId: string,
    page: number = 1,
    platforms?: string,
    ordering?: string
  ): Observable<any> {
    let url = `${environment.rawgUrl}/games?genres=${genreId}&page=${page}&key=${environment.apiKey}`;

    if (platforms) {
      const platformIds = this.mapPlatformNameToId(platforms);
      if (platformIds) {
        url += `&platforms=${platformIds}`;
      }
    }

    if (ordering) {
      const orderParam = this.mapOrderValueToApiParam(ordering);
      if (orderParam) {
        url += `&ordering=${orderParam}`;
      }
    }

    return this.httpClient.get(url);
  }

  private mapOrderValueToApiParam(orderValue: string): string {
    switch (orderValue) {
      case 'Relevance':
        return '';
      case 'Name':
        return 'name';
      case 'Release date':
        return '-released';
      case 'Popularity':
        return '-added';
      case 'Average rating':
        return '-rating';
      default:
        return '';
    }
  }

  private mapPlatformNameToId(platformName: string): string {
    const platformMap: { [key: string]: string } = {
      PC: '4',
      Playstation: '18,16,15,27', // PS5, PS4, PS3, PS2
      Xbox: '1,14,80', // Xbox One, Xbox 360, Xbox
      Nintendo: '7,8,9,83', // Switch, Wii U, Wii, NES
      Android: '21',
      Linux: '6',
    };

    return platformMap[platformName] || '';
  }
}
