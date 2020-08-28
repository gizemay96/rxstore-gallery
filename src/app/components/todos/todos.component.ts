import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/store/todo/model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { AddTodo, RemoveTodo, EditTodo } from 'src/app/store/todo/actions';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Observable<TodoModel[]>
  
  myTodo = {
    title:'',
    text: ''
  }

  constructor(private store:Store<AppState>) { 
    console.log(store.select('todoState'))
    this.todos = store.select('todoState')
  }

  ngOnInit(): void {
  }

  addTodo(){
    this.store.dispatch(new AddTodo(this.myTodo))
    this.myTodo = {
      title: '',
      text: ''
    }
  }

  deleteTodo(i){
    console.log("index" , i)
    this.store.dispatch(new RemoveTodo(i))
  }

  editTodo(i){
    this.store.dispatch(new EditTodo(this.myTodo,i))
    this.myTodo = {
      title: '',
      text: ''
    }
  }

}
