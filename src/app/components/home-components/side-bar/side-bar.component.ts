import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class SideBarComponent {
  @Input() isLoading: boolean = false;
  @Input() genres: any[] = [];
  @Input() selectedGenre: string | null = null;
  @Output() genreSelected = new EventEmitter<string | null>();
  activeButton: 'buy' | 'wishlist' | null = 'buy';

  constructor(
    public sidebarService: SidebarService,
    private genreService: GenreService
  ) {}

  onGenreClick(genreId: string) {
    this.genreService.setSelectedGenre(genreId);
    this.genreSelected.emit(genreId);
    this.sidebarService.close();
  }

  onBuyGamesClick() {
    this.genreService.setSelectedGenre(null);
    this.genreSelected.emit(null);
    this.sidebarService.close();
    this.activeButton = 'buy';
  }

  onWishlistClick() {
    this.genreService.setSelectedGenre(null);
    this.genreSelected.emit(null);
    this.sidebarService.close();
    this.activeButton = 'wishlist';
  }
}
