import { ActionReducerMap } from '@ngrx/store';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export interface CounterState {
  data: number;
}

export const reducer: ActionReducerMap<CounterState> = {
  data: counterReducer
};


