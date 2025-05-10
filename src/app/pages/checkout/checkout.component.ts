import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  isEditMode = false;
  orderItems: any[] = [];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.orderItems = items;
    });
  }

  // Toggle edit mode
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  // Remove item from cart
  removeItem(index: number) {
    const itemToRemove = this.orderItems[index];
    this.cartService.removeFromCart(itemToRemove.id);
  }

  // Remove insurance and update calculations
  get subtotal(): number {
    return this.orderItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }

  get tax(): number {
    return this.subtotal * 0.09; // 9% tax rate
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  navigateToPayment() {
    this.orderService.setTotal(this.total);
    this.router.navigate(['/payment']);
  }
}
