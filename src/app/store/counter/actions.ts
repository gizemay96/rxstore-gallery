import { Action } from '@ngrx/store';


export const INCREMENT = '[COUNTER] INCREMENT';
export const DECREMENT = '[COUNTER] DECREMENT';
export const RESET = '[COUNTER] RESET';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET
}

export type counterAction = Increment | Decrement | Reset


