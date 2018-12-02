import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { getList, isLoading, getError } from './product.selectors';
import { fetchProducts } from './product.actions';

@Component({
  selector: 'app-products',
  template: `
    <div *ngFor="let product of products$ | async">
      Product: {{ product.name }}
    </div>

    <div *ngIf="loading$ | async; let loading">
      <div *ngIf="loading">Loading...</div>
    </div>

    <div *ngIf="error$ | async; let error">
      <div *ngIf="error">{{ error }}</div>
    </div>
  `
})

export class ProductsComponent implements OnInit {
  products$;
  loading$;
  error$;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }
}
