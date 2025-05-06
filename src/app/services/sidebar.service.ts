import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  close() {
    this.isOpenSubject.next(false);
  }
}
