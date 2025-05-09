import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  constructor(
    private _apiWishlistService: WishlistService,
    private _router: Router
  ) {}

  wishlistGameId: string[] = [];
  games: any[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this._apiWishlistService.showGamesInWishlist().subscribe({
      next: (res) => {
        this.wishlistGameId = res['wishlist'] || [];
        console.log(this.wishlistGameId);

        if (this.wishlistGameId.length === 0) {
          this.isLoading = false;
          return;
        }

        this.wishlistGameId.forEach((gameId: string) => {
          this._apiWishlistService.getGameById(gameId).subscribe({
            next: (game) => {
              console.log(game);
              this.games.push(game);

              // Check if all games are loaded
              if (this.games.length === this.wishlistGameId.length) {
                this.isLoading = false;
              }
            },
            error: (err) => {
              console.error('Error loading game:', err);

              // Even if there's an error, we need to update loading state
              if (this.games.length === this.wishlistGameId.length - 1) {
                this.isLoading = false;
              }
            },
          });
        });
      },
      error: (err) => {
        console.log('error', err);
        this.isLoading = false;
      },
    });
  }

  goToGameDetails(id: string) {
    this._router.navigateByUrl(`games/${id}`);
  }

  removeFromWishlist(gameId: string) {
    this._apiWishlistService.removeGameFromWishlist(gameId).subscribe({
      next: () => {
        this.games = this.games.filter((game) => game.rawgId !== gameId);
        this.wishlistGameId = this.wishlistGameId.filter((id) => id !== gameId);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
    console.log('Remove from wishlist:', gameId);
  }
}
