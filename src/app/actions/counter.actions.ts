import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset'
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export type CounterActions = Increment | Decrement | Reset;
