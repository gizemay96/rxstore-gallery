import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter/reducer';
import { WidgetComponent } from './components/widget/widget.component';
import { TodosComponent } from './components/todos/todos.component';
import { todoReducer } from './store/todo/reducer';
import { from } from 'rxjs';
import { UsersComponent } from './pages/users/users.component';
import {userReducer} from '../app/store/users/reducer';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WidgetComponent,
    TodosComponent,
    UsersComponent,
    GalleryComponent,
    LightboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer,
      todoState: todoReducer,
      userState:userReducer,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
