import { Jedi } from './jedi/jedi-list/jedi.model';
import { FeatureProducts } from './product/product.reducer';

// typed representation of the store
export interface AppState {
  counter: number;
  jediList: Array<Jedi>;
  featureProducts: FeatureProducts;
}
