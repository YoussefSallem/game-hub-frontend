import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiGamesService } from '../../services/api-games.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { first } from 'rxjs';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApiGamesService: ApiGamesService,
    private _router: Router,
    private cartService: CartService,
    private _toaster: ToastService,
    private _apiLoginService: ApiLoginService
  ) {}
  slug!: string | null;
  game: any;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.slug = this._ActivatedRoute.snapshot.paramMap.get('slug');
    this._ApiGamesService.getGameBySlugName(this.slug).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.game = res;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  backToHome() {
    this._router.navigateByUrl('/');
  }

  addToCart() {
    if (!this.game || !this._apiLoginService.isLoggedIn()) {
      this._router.navigate(['/login']);
      return;
    }

    this.cartService
      .getCartItems()
      .pipe(first())
      .subscribe({
        next: (items) => {
          const index = items.findIndex((item) => item.name === this.game.name);

          if (index !== -1) {
            this._toaster.show(
              'You already added this item to cart',
              'error',
              3000
            );
          } else {
            this.cartService.addToCart({
              id: this.game.rawgId,
              name: this.game.name,
              price: this.game.price || 59.99,
              image: this.game.background_image || this.game.backgroundImage,
              slug: this.game.slug,
            });
            this._toaster.show('Added to your cart!', 'success', 3000);
          }
        },
        error: () => {
          this._toaster.show('Failed to access cart', 'error', 3000);
        },
      });
  }
}
