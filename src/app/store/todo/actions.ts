import { Action } from '@ngrx/store';
import { TodoModel } from './model';

export const ADD_TODO = '[TODO] ADD';
export const REMOVE_TODO = '[TODO] REMOVE';
export const EDIT_TODO = '[TODO] EDIT';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: TodoModel) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) {}
}

export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: TodoModel , public index: number) {}
}

export type actionTypes = AddTodo | RemoveTodo | EditTodo;
