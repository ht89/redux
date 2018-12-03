import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { RoutingAction, PRODUCTS } from './routing.constants';

@Injectable()
export class RoutingEffects {
  @Effect({ dispatch: false }) gotoProducts$ = this.actions$
    .ofType(PRODUCTS)
    .pipe(
      tap(action => {
        this.router.navigate([action.payload.url]);
      })
    );

  @Effect({ dispatch: false }) locationUpdate$: Observable<Action> = this.actions$
    .ofType('ROUTER_NAVIGATION')
    .pipe(
      tap(action => {
        console.log('router navigation effect', action);
      })
    );

  constructor(private router: Router,
    private actions$: Actions<RoutingAction>) { }
}
