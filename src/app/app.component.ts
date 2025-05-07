import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Game Hub';
  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {
    // when route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = [
          '/login',
          '/register',
          '/not-found',
          '/404',
          '/passwordRecovery',
          '/payment',
        ];
        this.showNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
        this.showFooter = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
