import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private selectedGenreSubject = new BehaviorSubject<string | null>(null);
  selectedGenre$ = this.selectedGenreSubject.asObservable();

  setSelectedGenre(genre: string | null) {
    this.selectedGenreSubject.next(genre);
  }

  getSelectedGenre() {
    return this.selectedGenreSubject.value;
  }
}
