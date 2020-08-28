import * as UserActions from './actions';
import {UserI} from './model';

const initialState = []

export function userReducer(state = initialState , action:UserActions.actionTypes){
    switch (action.type) {
        case UserActions.ADD:
        return  [...initialState,action.payload];
          
        case UserActions.SET_USERS:
        return [...action.payload];

        default:
         return state;
    }

}