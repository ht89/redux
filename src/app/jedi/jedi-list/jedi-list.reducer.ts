import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from './jedi-list.contants';
import { Jedi } from './jedi.model';
import { ActionReducerMap } from '@ngrx/store';

const jediListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_JEDI:
      return [...state, { ...action.payload }];
    case REMOVE_JEDI:
      return state.filter(jedi => jedi.id !== action.payload.id);
    case LOAD_JEDIS:
      return action.payload.map(jedi => ({...jedi}));
    default:
      return state;
  }
};

export interface JediListState {
  data: Array<Jedi>;
}

export const reducer: ActionReducerMap<JediListState> = {
  data: jediListReducer
};
