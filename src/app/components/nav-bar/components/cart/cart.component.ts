import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartItem, CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartItemsCount = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.cartItemsCount = items.length;
    });
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
}
