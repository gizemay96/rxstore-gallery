import {Action} from '@ngrx/store';
import {UserI} from './model';

export const ADD = '[USER] ADD';
export const SET_USERS = '[USER] SET';

export class Add implements Action {
    readonly type = ADD

    constructor(public payload:UserI){}
}

export class SetUsers implements Action {
    readonly type = SET_USERS

    constructor(public payload:UserI[]){}
}

export type actionTypes = Add | SetUsers;