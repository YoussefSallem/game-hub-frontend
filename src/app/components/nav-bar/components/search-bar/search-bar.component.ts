import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import { KeyboardService } from '../../../../services/keyboard.service';
import { ApiGamesService } from '../../../../services/api-games.service';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  searchQuery: string = '';
  searchResults: any[] = [];
  showResults = false;
  expanded = false;

  private searchSubject = new Subject<string>();
  private allowCollapse = true;

  constructor(
    private keyboardService: KeyboardService,
    private gameService: ApiGamesService,
    private ngZone: NgZone
  ) {
    // Initialize the debounced search
    this.searchSubject
      .pipe(
        debounceTime(500), // Wait for 500ms of silence
        distinctUntilChanged() // Only emit if the value has changed
      )
      .subscribe((query) => {
        if (!query.trim()) {
          this.searchResults = [];
          this.showResults = false;
          return;
        }

        this.expanded = true;

        this.gameService.searchGames(query).subscribe({
          next: (games) => {
            this.searchResults = games;
            this.showResults = true;
          },
          error: (err) => {
            console.error('Search error:', err);
            this.showResults = false;
          },
        });
      });
  }

  onInputChange(): void {
    this.searchSubject.next(this.searchQuery);
  }

  ngAfterViewInit(): void {
    this.keyboardService.keydown$.subscribe((event) => {
      const tag = (event.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (event.altKey && event.key === 'Enter') {
        event.preventDefault();

        this.ngZone.run(() => {
          const shouldExpand = !this.expanded;
          this.expanded = shouldExpand;

          setTimeout(() => {
            if (shouldExpand) {
              this.searchInput.nativeElement.focus();
            } else {
              this.allowCollapse = false;
              this.searchInput.nativeElement.blur();
            }
          }, 0);
        });
      }
    });
  }

  onSearchBlur(): void {
    setTimeout(() => {
      this.showResults = false;

      if (this.allowCollapse) {
        this.expanded = false;
      }

      this.allowCollapse = true; // Reset flag
    }, 150);
  }
}
