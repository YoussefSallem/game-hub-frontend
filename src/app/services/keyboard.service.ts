import { Injectable, OnDestroy } from '@angular/core';
import { Subject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService implements OnDestroy {
  private keydownSub: Subscription;
  public keydown$ = new Subject<KeyboardEvent>();

  constructor() {
    this.keydownSub = fromEvent<KeyboardEvent>(window, 'keydown').subscribe(
      (event) => {
        this.keydown$.next(event);
      }
    );
  }

  ngOnDestroy(): void {
    this.keydownSub.unsubscribe();
  }
}
