import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  list: any = [];
  constructor(private _apiGamesService: ApiGamesService) {}

  ngOnInit(): void {
    this._apiGamesService.getAllGames().subscribe({
      next: (res) => {
        this.list = res.data; // 10 objects
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
