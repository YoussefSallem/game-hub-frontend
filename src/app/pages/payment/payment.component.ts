import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

declare var paypal: any;

@Component({
  selector: 'app-payment',
  imports: [CommonModule, RouterLink],
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  paymentSuccess = false;
  paymentError = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.renderPayPalButton();
  }

  renderPayPalButton() {
    paypal
      .Buttons({
        createOrder: () => {
          return this.http
            .post<{ id: string }>(
              `${environment.baseUrl}/paypal/create-order`,
              {
                amount: '10.00',
              }
            )
            .toPromise()
            .then((res) => {
              if (res?.id) {
                return res.id;
              } else {
                throw new Error('No order ID returned from server');
              }
            });
        },

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
