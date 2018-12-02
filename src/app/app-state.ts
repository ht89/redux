import { FeatureProducts } from './product/product.reducer';
import { JediListState } from './jedi/jedi-list/jedi-list.reducer';
import { CounterState } from './counter/counter.module';
import { State } from './app.module';

// typed representation of the store
export interface AppState {
  counter: CounterState;
  jediList: JediListState;
  featureProducts: FeatureProducts;
  users: State;
}
