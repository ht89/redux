import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-counter',
  template: `
    {{ counter$ | async }}

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})

export class CounterComponent implements OnInit {
  counter$;

  constructor(private store: Store<any>) {
    this.counter$ = store.select(state => state.counter.data);
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
}
