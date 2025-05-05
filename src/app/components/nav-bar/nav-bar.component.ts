import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from '../../dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule,DarkModeToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
