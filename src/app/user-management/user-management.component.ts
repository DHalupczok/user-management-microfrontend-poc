import { Component } from '@angular/core';
import {UsersService} from "./services/users.service";
import {User} from "./models/user.model";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  title = 'user-management-microfrontend-poc';
  user$ = this.usersService.user$;
  constructor(private usersService: UsersService) {

  }

  removeUser($event: number) {
    this.usersService.removeUser($event);
  }

  addUser($event: User) {
    this.usersService.addUser($event)
  }
}
