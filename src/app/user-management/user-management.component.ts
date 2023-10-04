import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";
import {User} from "./models/user.model";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit{
  title = 'user-management-microfrontend-poc';
  user$ = this.usersService.user$;
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    localStorage.setItem('greeting', 'hello');
  }

  removeUser($event: number) {
    this.usersService.removeUser($event);
  }

  addUser($event: User) {
    this.usersService.addUser($event)
  }
}
