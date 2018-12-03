import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>

    <br />
    <br />
    <br />

    <app-jedi-list></app-jedi-list>

    <br />
    <br />
    <br />

    <app-products></app-products>

    <div style="border: solid 1px black; padding: 10px;"
      *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>

    <div>
      <input [(ngModel)]="user" />
      <button (click)="add()">Add</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$;
  user;
  id = 1;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store
      .select(state => state.users.entities)
      .pipe(
        map(this.toArray)
      );

    this.users$
      .subscribe(data => console.log('users', data));
  }

  toArray(obj) {

    if (!obj) {
      return obj;
    }

    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }

  add() {
    const newUser = {
      id: this.id++,
      name: this.user
    };

    this.store.dispatch({
      type: 'ADD_USER',
      payload: newUser
    });
  }
}
