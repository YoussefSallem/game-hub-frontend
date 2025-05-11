import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from './api-login.service';
import { BehaviorSubject } from 'rxjs';

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

  constructor(
    private router: Router,
    private apiLoginService: ApiLoginService
  ) {}

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
      this.cartItems.next([...currentItems, item]);
      return true;
    }
    return false;
  }

  removeFromCart(itemId: number) {
    const currentItems = this.cartItems.value;
    this.cartItems.next(currentItems.filter((item) => item.id !== itemId));
  }
}
