// side-bar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
import { RouterModule } from '@angular/router';

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

  constructor(public sidebarService: SidebarService) {}

  onGenreClick(genreId: string) {
    this.genreSelected.emit(genreId);
    this.sidebarService.close();
  }

  activeButton: 'buy' | 'wishlist' | null = 'buy';

  onBuyGamesClick() {
    this.genreSelected.emit(null);
    this.sidebarService.close();
    this.activeButton = 'buy';
  }

  onWishlistClick() {
    this.genreSelected.emit(null);
    this.sidebarService.close();
    this.activeButton = 'wishlist';
  }
}
