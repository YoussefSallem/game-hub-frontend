import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);
  private counter = 0;

  constructor() {}

  getToasts(): Observable<Toast[]> {
    return this.toasts.asObservable();
  }

  show(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration: number = 3000
  ): void {
    const id = this.counter++;
    const toast: Toast = { id, message, type, duration };

    const currentToasts = this.toasts.value;
    this.toasts.next([...currentToasts, toast]);

    setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  remove(id: number): void {
    const currentToasts = this.toasts.value;
    this.toasts.next(currentToasts.filter((toast) => toast.id !== id));
  }
}
