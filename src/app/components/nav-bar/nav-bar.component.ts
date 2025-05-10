import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';
import { ApiLoginService } from '../../services/api-login.service';
import { SidebarService } from '../../services/sidebar.service';
import { KeyboardService } from '../../services/keyboard.service';
import { ApiGamesService } from '../../services/api-games.service';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { DesktopAuthLinksComponent } from './components/desktop-auth-links/desktop-auth-links.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterModule,
    DarkModeToggleComponent,
    FormsModule,
    CommonModule,
    SearchBarComponent,
    LogoComponent,
    CartComponent,
    DesktopAuthLinksComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  isMenuOpen: boolean = false;
  isLoginIn: boolean = false;

  searchQuery: string = '';

  searchResults: any[] = [];
  showResults = false;

  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartItemsCount = 0;

  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router,
    private sidebarService: SidebarService,
    private keyboardService: KeyboardService,
    private cartService: CartService,
    private gameService: ApiGamesService
  ) {}

  onInputChange(): void {
    const trimmed = this.searchQuery.trim();
    if (!trimmed) {
      this.searchResults = [];
      this.showResults = false;
      return;
    }

    this.gameService.searchGames(trimmed).subscribe({
      next: (games) => {
        this.searchResults = games;
        this.showResults = true;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.showResults = false;
      },
    });
  }

  ngOnInit(): void {
    this.isLoginIn = this._apiLoginService.isLoggedIn();
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.cartItemsCount = items.length;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoginIn = this._apiLoginService.isLoggedIn();
  }

  ngAfterViewInit(): void {
    this.keyboardService.keydown$.subscribe((event) => {
      const tag = (event.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (event.altKey && event.key === 'Enter') {
        event.preventDefault();
        this.searchInput.nativeElement.focus();
        console.log(
          this.searchInput.nativeElement.classList.add('lg:w-[600px]')
        );
      }
    });
  }

  onSearchBlur(): void {
    setTimeout(() => {
      this.showResults = false;
    }, 150);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const cartButton = (event.target as HTMLElement).closest('button');
    const cartModal = (event.target as HTMLElement).closest('.cart-modal');

    if (!cartButton && !cartModal && this.isCartOpen) {
      this.isCartOpen = false;
    }
  }

  toggleCart(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isCartOpen = !this.isCartOpen;
  }

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  toggleSidebar() {
    this.sidebarService.toggle();
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
