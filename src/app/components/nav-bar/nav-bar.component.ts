import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule, DarkModeToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router
  ) {}

  isMenuOpen: boolean = false;
  isLoginIn: boolean = false;

  ngOnInit(): void {
    this.isLoginIn = this._apiLoginService.isLoggedIn();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    this._apiLoginService.logout();
    this.isLoginIn = false;
    this.closeMenu();
    this.router.navigate(['/home']);
  }
}
