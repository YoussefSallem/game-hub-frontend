import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiGamesService } from '../../services/api-games.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css',
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApiGamesService: ApiGamesService,
    private _Location: Location,
    private cartService: CartService
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

  back() {
    this._Location.back();
  }

  addToCart() {
    if (this.game) {
      this.cartService.addToCart({
        id: this.game.rawgId,
        name: this.game.name,
        price: this.game.price || 59.99,
        image: this.game.background_image || this.game.backgroundImage, // Fixed image property
        slug: this.game.slug,
      });
    }
  }
}
