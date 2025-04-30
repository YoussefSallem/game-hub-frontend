import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGamesService {
  constructor(private httpClient: HttpClient) {}
  getAllGames():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/games`);
  }
}
