import { Component } from '@angular/core';
import { Increment, Decrement } from 'src/app/store/counter/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterModel } from './store/counter/model';
import { AppState } from './store/state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
  count:Observable<number>;

  constructor(private store:Store<AppState>){
    this.count = store.select('counter' , 'count');
  }
}
