import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  skeletonArray: number[] = Array.from({ length: 11 }, (_, i) => i); // static array 
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

  orderValue: string = 'Relevance';
  onOrderChange(event: Event) {
    // accessing event.target.value with proper type assertion
    const target = event.target as HTMLSelectElement;
    this.orderValue = target.value;

    // reset
    this.page = 1;
    this.list = [];
    this.loadMore();
  }

  platformValue: string = 'all';
  onPlatformChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.platformValue = target.value;

    this.page = 1;
    this.list = [];
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
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
