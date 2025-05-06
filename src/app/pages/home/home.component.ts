import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from '../../components/home-components/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  skeletonArray: number[] = Array.from({ length: 11 }, (_, i) => i);
  list: any = [];
  page: number = 1;
  isLoading: boolean = false;
  selectedGenre: string | null = null;
  genres: any[] = [];
  genresLoading: boolean = false;

  constructor(private _apiGamesService: ApiGamesService) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadMore();
  }

  loadGenres() {
    this.genresLoading = true;
    this._apiGamesService.getGenres().subscribe({
      next: (res) => {
        this.genres = res.results; // Extract results from response
        this.genresLoading = false;
      },
      error: (err) => {
        console.error('Error loading genres:', err);
        this.genresLoading = false;
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
      !this.isLoading
    ) {
      this.loadMore();
    }
  }

  orderValue: string = 'Relevance';
  onOrderChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.orderValue = target.value;
    this.resetAndLoad();
  }

  platformValue: string = 'all';
  onPlatformChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.platformValue = target.value;
    this.resetAndLoad();
  }

  onGenreSelected(genreId: string | null) {
    this.selectedGenre = genreId;
    this.resetAndLoad();
  }

  resetAndLoad() {
    this.page = 1;
    this.list = [];
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;

    if (this.selectedGenre) {
      this._apiGamesService
        .getGamesByGenre(this.selectedGenre, this.page)
        .subscribe({
          next: (res) => {
            const transformedGames = res.results.map((game: any) => ({
              ...game,
              backgroundImage: game.background_image,
              background_image: undefined,
            }));
            this.list.push(...transformedGames);
            this.page++;
            this.isLoading = false;
          },
          error: (err) => {
            console.error(err);
            this.isLoading = false;
          },
        });
    } else {
      this._apiGamesService
        .getGames(this.page, this.platformValue, this.orderValue)
        .subscribe({
          next: (res) => {
            this.list.push(...res.data);
            this.page++;
            this.isLoading = false;
          },
          error: (err) => {
            console.error(err);
            this.isLoading = false;
          },
        });
    }
  }

  getGenreName(genreId: string | null): string {
    if (!genreId) return '';
    const genre = this.genres.find((g) => g.id === genreId);
    return genre ? genre.name : '';
  }
}
