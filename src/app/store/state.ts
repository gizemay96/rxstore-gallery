import { CounterModel } from '../store/counter/model';
import { TodoModel } from '../store/todo/model';
import { UserI } from './users/model';
export interface AppState {
    readonly counter: CounterModel,
    readonly todoState: TodoModel[],
    readonly userState:UserI[],
}