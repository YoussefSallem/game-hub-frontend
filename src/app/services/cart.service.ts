import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  
  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    if (!currentItems.find(i => i.id === item.id)) {
      this.cartItems.next([...currentItems, item]);
    }
  }

  removeFromCart(itemId: number) {
    const currentItems = this.cartItems.value;
    this.cartItems.next(currentItems.filter(item => item.id !== itemId));
  }
}