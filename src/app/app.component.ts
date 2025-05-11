import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    RouterModule,
    CommonModule,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Game Hub';
  showNavbar = true;

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
          '/checkout',
          '/reset-password/:token',
        ];
        this.showNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
