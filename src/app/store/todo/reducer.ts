import * as TodoActions from './actions';
import { element } from 'protractor';

const initialState = [
  {
    title: 'First Todo',
    text: 'My First Todo Text !',
  },
  {
    title: 'Second Todo',
    text: 'My Second Todo Text !',
  },
];

export function todoReducer(
  state = initialState,
  action: TodoActions.actionTypes
) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    case TodoActions.REMOVE_TODO:
      return state.filter((todo, index) => index !== action.payload);
    case TodoActions.EDIT_TODO:
      return state.map((todo, i) =>
        i === action.index ? action.payload : todo
      );

    default:
      return state;
  }
}
