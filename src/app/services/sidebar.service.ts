import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  private activeButtonSubject = new BehaviorSubject<'buy' | 'wishlist' | null>(
    'buy'
  );
  activeButton$ = this.activeButtonSubject.asObservable();

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }

  get activeButton(): 'buy' | 'wishlist' | null {
    return this.activeButtonSubject.value;
  }

  setActiveButton(button: 'buy' | 'wishlist' | null) {
    this.activeButtonSubject.next(button);
  }

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  close() {
    this.isOpenSubject.next(false);
  }
}
