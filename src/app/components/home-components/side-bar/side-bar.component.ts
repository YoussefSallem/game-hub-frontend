import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
import { RouterModule } from '@angular/router';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() genres: any[] = [];
  @Input() selectedGenre: string | null = null;
  @Output() genreSelected = new EventEmitter<string | null>();

  activeButton: 'buy' | 'wishlist' | null = 'buy';

  constructor(
    public sidebarService: SidebarService,
    private genreService: GenreService
  ) {}

  ngOnInit() {
    this.genreService.selectedGenre$.subscribe((genre) => {
      this.selectedGenre = genre;
      if (genre) {
        this.activeButton = null;
      }
    });
  }

  onGenreClick(genreId: string) {
    this.genreService.setSelectedGenre(genreId);
    this.genreSelected.emit(genreId);
    this.activeButton = null;
    this.sidebarService.close();
  }

  onBuyGamesClick() {
    this.genreService.setSelectedGenre(null);
    this.genreSelected.emit(null);
    this.activeButton = 'buy';
    this.sidebarService.close();
  }

  onWishlistClick() {
    this.genreService.setSelectedGenre(null);
    this.genreSelected.emit(null);
    this.activeButton = 'wishlist';
    this.sidebarService.close();
  }
}
