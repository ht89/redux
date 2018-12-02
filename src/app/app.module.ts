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
    default:
      return state;
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      users: userReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // retain the last 25 states
    }),
    EffectsModule.forRoot([]),
    CounterModule,
    JediModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
