import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

declare var paypal: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit, AfterViewInit {
  paymentSuccess = false;
  paymentError = '';
  total: number = 0;
  orderNumber: string = '';
  orderID: string = '';

  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private cartService: CartService
  ) {
    this.total = this.orderService.getTotal();
    if (this.total <= 0) {
      this.total = 49.99; // Fallback value if no total was set
    }
  }

  ngOnInit() {
    // Don't render PayPal button here
  }

  ngAfterViewInit() {
    // Render PayPal button after view is initialized
    setTimeout(() => {
      this.renderPayPalButton();
    }, 1000); // Add a small delay to ensure DOM is fully rendered
  }

  renderPayPalButton() {
    // Check if the container exists before rendering
    if (!document.getElementById('paypal-button-container')) {
      console.error('PayPal button container not found in the DOM');
      this.paymentError = 'Payment system unavailable. Please try again later.';
      return;
    }

    paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: () => {
          return this.http
            .post<{ id: string }>(
              `${environment.baseUrl}/paypal/create-order`,
              {
                amount: this.total.toFixed(2),
              }
            )
            .toPromise()
            .then((res) => {
              if (res?.id) {
                this.orderID = res.id;
                return res.id;
              } else {
                throw new Error('No order ID returned from server');
              }
            });
        },

        // In onApprove callback
        onApprove: (data: any) => {
          return this.http
            .post(`${environment.baseUrl}/paypal/capture-order`, {
              orderID: data.orderID,
            })
            .toPromise()
            .then((res) => {
              this.paymentSuccess = true;
              this.paymentError = '';
              console.log('Payment success:', res);
              this.cartService.clearCart();
            })
            .catch((err) => {
              console.error(err);
              this.paymentError = 'Payment failed. Please try again.';
            });
        },

        onError: (err: any) => {
          console.error('PayPal error:', err);
          this.paymentError = 'An error occurred with PayPal.';
        },
      })
      .render('#paypal-button-container');
  }
}
