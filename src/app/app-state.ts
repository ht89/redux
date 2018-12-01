import { Jedi } from './jedis/jedi.model';

// typed representation of the store
export interface AppState {
  counter: number;
  jediList: Array<Jedi>;
}
