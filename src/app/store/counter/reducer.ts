import * as counterActions from './actions';

const initialState = {
  count: 0,
};

export function counterReducer(
  state = initialState,
  action: counterActions.counterAction
):Object {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {count: state.count +1};
    case counterActions.DECREMENT:
      return {count: state.count -1};
    case counterActions.RESET:
      return {count: 0}

    default:
      return state;
  }
}
