import {
  Component,
  OnInit,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';
import { ApiLoginService } from '../../services/api-login.service';
import { SidebarService } from '../../services/sidebar.service';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule, DarkModeToggleComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit, OnChanges {
  isMenuOpen: boolean = false;
  isLoginIn: boolean = false;
  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartItemsCount = 0;

  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router,
    private sidebarService: SidebarService,
    private cartService: CartService
  ) {}

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
