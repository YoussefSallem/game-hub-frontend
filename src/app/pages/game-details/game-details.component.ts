import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/home-components/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiGamesService } from '../../services/api-games.service';

@Component({
  selector: 'app-game-details',
  imports: [SideBarComponent, CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css',
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApiGamesService: ApiGamesService
  ) {}
  gameId!: string | null;
  game: any;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this._ApiGamesService.getGameById(this.gameId).subscribe({
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
}
