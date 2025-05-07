import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _total: number = 0;

  setTotal(total: number) {
    this._total = total;
  }

  getTotal(): number {
    return this._total;
  }
}
