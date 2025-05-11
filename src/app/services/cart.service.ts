import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from './api-login.service';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private readonly CART_COOKIE_KEY = 'cartItems';

  constructor(
    private router: Router,
    private apiLoginService: ApiLoginService,
    private cookieService: CookieService
  ) {
    // Load cart on initialization if logged in
    if (this.apiLoginService.isLoggedIn()) {
      this.loadCartFromCookies();
    }

    // Subscribe to login state changes
    this.apiLoginService.getLoginState().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.loadCartFromCookies();
        // Re-save items to cookies with new token
        const currentItems = this.cartItems.value;
        if (currentItems.length > 0) {
          this.saveCartToCookies(currentItems);
        }
      }
    });

    this.apiLoginService.logoutEvent.subscribe(() => {
      this.clearCartItems();
    });
  }

  private loadCartFromCookies() {
    try {
      const cartData = this.cookieService.get(this.CART_COOKIE_KEY);
      if (cartData) {
        const items = JSON.parse(cartData);
        this.cartItems.next(items);
      }
    } catch (error) {
      console.error('Error loading cart from cookies:', error);
      this.cartItems.next([]);
    }
  }

  private saveCartToCookies(items: CartItem[]) {
    const token = this.apiLoginService.getToken();
    if (token) {
      this.cookieService.set(this.CART_COOKIE_KEY, JSON.stringify(items), {
        secure: true,
        sameSite: 'Lax',
        path: '/',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      });
    }
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(item: any): boolean {
    if (
      !this.apiLoginService.isLoggedIn() ||
      !this.apiLoginService.isValidToken()
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    const currentItems = this.cartItems.value;
    if (!currentItems.find((i) => i.id === item.id)) {
      const newItems = [...currentItems, item];
      this.cartItems.next(newItems);
      this.saveCartToCookies(newItems);
      return true;
    }
    return false;
  }

  removeFromCart(itemId: number) {
    const currentItems = this.cartItems.value;
    const newItems = currentItems.filter((item) => item.id !== itemId);
    this.cartItems.next(newItems);
    this.saveCartToCookies(newItems);
  }

  clearCart() {
    this.cartItems.next([]);
    this.cookieService.delete(this.CART_COOKIE_KEY, '/');
  }

  clearCartItems() {
    // Only clear the BehaviorSubject, keep cookies
    this.cartItems.next([]);
  }
}
