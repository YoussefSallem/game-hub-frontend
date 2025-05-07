import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  // Flag to track edit mode
  isEditMode = false;

  // Sample data - in a real app, this would come from a service
  orderItems = [
    {
      id: 1,
      title: 'Game Title 1',
      edition: 'Digital Edition',
      quantity: 1,
      price: 29.99,
      image: 'assets/images/game-placeholder.jpg',
    },
    {
      id: 2,
      title: 'Game Title 2',
      edition: 'Standard Edition',
      quantity: 1,
      price: 19.99,
      image: 'assets/images/game-placeholder.jpg',
    },
  ];

  constructor(private orderService: OrderService, private router: Router) {}

  // Toggle edit mode
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  // Remove item from cart
  removeItem(index: number) {
    this.orderItems.splice(index, 1);
  }

  // Calculate totals
  get subtotal(): number {
    return this.orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  get tax(): number {
    return this.subtotal * 0.09; // 9% tax rate
  }

  get insurance(): number {
    return 2.0;
  }

  get total(): number {
    return this.subtotal + this.tax + this.insurance;
  }

  navigateToPayment() {
    this.orderService.setTotal(this.total);
    this.router.navigate(['/payment']);
  }
}
