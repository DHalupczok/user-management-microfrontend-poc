import {Component, EventEmitter, Output} from '@angular/core';
import {Role, User} from "../../models/user.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() addUser = new EventEmitter<User>();
  login: string = '';
  password: string = '';
  role: Role = 'user';
}
