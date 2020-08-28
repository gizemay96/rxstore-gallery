import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { TodoModel } from 'src/app/store/todo/model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  count: Observable<number>;

  todos: Observable<TodoModel[]>;

  constructor(private store: Store<AppState>) {
    (this.count = store.select('counter', 'count')),
      (this.todos = store.select('todoState'));
  }

  ngOnInit(): void {}

 
}
