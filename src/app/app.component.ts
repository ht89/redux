import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { map } from 'rxjs/operators';
import { gotoProducts } from './routing.actions';

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

      <app-edit-user [user]="user" (save)="update($event)"></app-edit-user>

      <button (click)="remove(user.id)">Remove</button>
    </div>

    <div>
      <input [(ngModel)]="user" />
      <button (click)="add()">Add</button>
    </div>

    <div>
      <button (click)="navigateToProducts()">Products</button>
    </div>

    <div>
      <a [routerLink]="['/products/1']" [queryParams]="{page: 1}">Product Id 1</a>
    </div>
  `
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

    // this.store
    //     .select(state => state.router)
    //     .subscribe(route => console.log('router obj', route));
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

  update(user) {
    console.log('updating', user);

    this.store.dispatch({
      type: 'UPDATE_USER',
      payload: user
    });
  }

  remove(id) {
    console.log('removing', id);

    this.store.dispatch({
      type: 'DELETE_USER',
      payload: { id }
    });
  }

  navigateToProducts() {
    this.store.dispatch(gotoProducts(1));
  }
}
