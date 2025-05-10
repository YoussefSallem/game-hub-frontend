import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DarkModeToggleComponent } from '../../../dark-mode-toggle/dark-mode-toggle.component';
import { Router, RouterLink } from '@angular/router';
import { ApiLoginService } from '../../../../services/api-login.service';

@Component({
  selector: 'app-desktop-auth-links',
  imports: [DarkModeToggleComponent, RouterLink],
  templateUrl: './desktop-auth-links.component.html',
  styleUrl: './desktop-auth-links.component.css',
})
export class DesktopAuthLinksComponent implements OnInit, OnChanges {
  isMenuOpen: boolean = false;
  isLoginIn: boolean = false;

  constructor(
    private router: Router,
    private _apiLoginService: ApiLoginService
  ) {}

  ngOnInit(): void {
    this.isLoginIn = this._apiLoginService.isLoggedIn();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoginIn = this._apiLoginService.isLoggedIn();
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
