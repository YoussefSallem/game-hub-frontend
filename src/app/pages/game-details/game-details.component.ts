import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiGamesService } from '../../services/api-games.service';

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
    private _Location:Location
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

  back(){
    this._Location.back()
  }
}
