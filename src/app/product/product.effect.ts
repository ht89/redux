import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { FETCHING_PRODUCTS, ADD_PRODUCT } from './product.constants';
import { switchMap, delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { fetchSuccessfully, fetchError, addProductsSuccessfully, addProductError } from './product.actions';

@Injectable()
export class ProductEffects {
  @Effect() productsGet$: Observable<Action> = this.actions$
    .pipe(
      ofType(FETCHING_PRODUCTS), // the action we're listening to
      switchMap(action => {
        // do sth completely different. Else, that returns an Observable
        return this.http.get('../../assets/data/products.json').pipe(
          delay(3000),
          map(fetchSuccessfully),
          catchError(err => of(fetchError(err)))
        );
      })
    );

  @Effect() productsAdd$: Observable<any> = this.actions$
    .pipe(
      ofType(ADD_PRODUCT),
      switchMap((action: any) => {
        return this.http.post('products/', action.payload)
          .pipe(
            map(addProductsSuccessfully),
            catchError(err => of(addProductError(err)))
          );
      })
    );

    constructor(private actions$: Actions < Action >,
      private http: HttpClient) {

}
}
