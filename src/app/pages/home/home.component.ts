import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from '../../components/home-components/side-bar/side-bar.component';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  skeletonArray: number[] = Array.from({ length: 11 }, (_, i) => i);
  list: any = [];
  page: number = Math.floor(Math.random() * 50) + 1;
  isLoading: boolean = false;
  selectedGenre: string | null = null;
  genres: any[] = [];
  genresLoading: boolean = false;
  isVerticalLayout: boolean = false;

  constructor(
    private _apiGamesService: ApiGamesService,
    private _apiWishlistService: WishlistService,
    private _router: Router,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadMore();
  }

  goToGameDetails(slug: string) {
    window.scrollTo(0, 0);
    this._router.navigateByUrl(`games/${slug}`);
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
        .getGamesByGenre(
          this.selectedGenre,
          this.page,
          this.platformValue,
          this.orderValue
        )
        .subscribe({
          next: (res) => {
            const transformedGames = res.results.map((game: any) => ({
              ...game,
              rawgId: game.id,
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

  addToFav(gameId: string) {
    // First check if game is already in wishlist
    this._apiWishlistService.showGamesInWishlist().subscribe({
      next: (res) => {
        const wishlist = res['wishlist'] || [];
        if (wishlist.includes(gameId)) {
          this._toastService.show(
            'Game is already in your wishlist!',
            'warning'
          );
          return;
        }

        // If not in wishlist, proceed to add it
        this._apiWishlistService.addToWishlist(gameId).subscribe({
          next: (res) => {
            console.log('Successfully added to wishlist', res);
            this._toastService.show(
              'Game added to wishlist successfully!',
              'success'
            );
          },
          error: (err) => {
            console.log('Error details:', err);
            this._toastService.show(
              'You already added this game to your wishlist.',
              'error'
            );
          },
        });
      },
      error: (err) => {
        console.log('Error checking wishlist:', err);
        this._toastService.show('Failed to check wishlist status', 'error');
      },
    });
  }

  toggleLayout(isVertical: boolean) {
    this.isVerticalLayout = isVertical;
  }
}
