import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

export function reducer(state = initialState, action: Action): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return { ...state, count: state.count + 2 };
    case CounterActionTypes.Decrement:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
