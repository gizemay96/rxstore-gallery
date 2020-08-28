import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterModel } from '../../store/counter/model';
import { Increment, Decrement, Reset } from 'src/app/store/counter/actions';
import { AppState } from 'src/app/store/state';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<AppState>) {
    console.log(store.select((state) => state.counter));
    this.count = store.select('counter' , 'count');
  }

  ngOnInit(): void {}

  increment() {
    //this.count ++
    this.store.dispatch(new Increment())
  }

  decrement() {
    //this.count --
    this.store.dispatch(new Decrement())

  }

  reset(){
    this.store.dispatch(new Reset())
  }
}
