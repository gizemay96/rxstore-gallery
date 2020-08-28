import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserI } from 'src/app/store/users/model';
import { Store } from '@ngrx/store';
import { SetUsers } from 'src/app/store/users/actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Observable<UserI[]>;
  isLoading: boolean = true;

  userForm = {
    name: '',
    username: '',
    email: '',
    website: '',
    phone: '',
  };

  constructor(
    private userService: UserServiceService,
    private store: Store<AppState>
  ) {
    this.users = this.store.select('userState');
  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((result) => {
      this.isLoading = false;
    });
  }

  addUser() {
    console.log(this.userForm);
    this.isLoading = true;
    this.userService
      .addUser(this.userForm)
      .subscribe((result) =>
        this.userService.fetchUsers().subscribe(() => (this.isLoading = false))
      );
  }
}
