import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  template: `
    {{ counter$ | async }}

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>

    <br />
    <br />
    <br />

    <app-jedi-list></app-jedi-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
}