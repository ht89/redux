import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { JediModule } from './jedi/jedi.module';
import { CounterModule } from './counter/counter.module';
import { ProductModule } from './product/product.module';
import { EffectsModule } from '@ngrx/effects';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from './user/user.model';
import { ActionPayload } from './interfaces';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './user/edit-user.component';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { RoutingEffects } from './routing.effects';
import { RoutingSerialiser } from './routing-serialiser';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: State = {
  ids: [],
  entities: {},
  selectedUserId: null
};

export const initial = userAdapter.getInitialState(initialState);

const userReducer = (state = initial, action: ActionPayload<User>): State => {
  switch (action.type) {
    case 'ADD_USER':
      return userAdapter.addOne(action.payload, state);
    case 'UPDATE_USER':
      return userAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload
        },
        state
      );
    case 'DELETE_USER':
      return userAdapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
};

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    StoreModule.forRoot({
      users: userReducer,
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // retain the last 25 states
    }),
    EffectsModule.forRoot([
      RoutingEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),
    CounterModule,
    JediModule,
    ProductModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: RoutingSerialiser }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
