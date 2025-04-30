import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  list: any = [];
  page: number = 1;
  isLoading: boolean = false;
  constructor(private _apiGamesService: ApiGamesService) {}

  ngOnInit(): void {
    this.loadMore();
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

  loadMore() {
    this.isLoading = true;
    this._apiGamesService.getAllGames(this.page).subscribe({
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
