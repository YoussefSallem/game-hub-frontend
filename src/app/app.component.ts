import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { SideBarComponent } from './components/home-components/side-bar/side-bar.component';
import { ApiGamesService } from './services/api-games.service';
import { GenreService } from './services/genre.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    RouterModule,
    CommonModule,
    ToastComponent,
    SideBarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Game Hub';
  showNavbar = true;

  selectedGenre: string | null = null;
  genres: any[] = [];
  genresLoading: boolean = false;

  constructor(
    private router: Router,
    private _apiGamesService: ApiGamesService,
    private genreService: GenreService
  ) {
    // when route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const hiddenRoutes = [
          '/login',
          '/register',
          '/not-found',
          '/404',
          '/passwordRecovery',
          '/payment',
          '/checkout',
          '/reset-password/:token',
        ];
        const isResetPasswordRoute = url.startsWith('/reset-password/');

        this.showNavbar = !hiddenRoutes.includes(url) && !isResetPasswordRoute;
      }
    });
  }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genresLoading = true;
    this._apiGamesService.getGenres().subscribe({
      next: (res) => {
        this.genres = res.results; // Extract results from response
        this.genresLoading = false;
      },
      error: (err) => {
        console.error('Error loading genres:', err);
        this.genresLoading = false;
      },
    });
  }

  onGenreSelected(genreId: any) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
  }
}
