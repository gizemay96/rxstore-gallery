import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { tap} from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { SetUsers } from '../store/users/actions';
import { UserI } from '../store/users/model';
import { AppState } from '../store/state';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient,
    private store:Store<AppState>
  ) { }

  fetchUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe (
      tap((result:UserI[]) => {
        console.log(result)
        this.store.dispatch(new SetUsers(result))
      })
    )
  }

  addUser(newUser:UserI){
    return this.http.post('https://jsonplaceholder.typicode.com/users',newUser);
    
  }
}
