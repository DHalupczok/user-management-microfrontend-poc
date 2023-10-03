import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user?: User;
  @Output() removeUser = new EventEmitter<number>;
}
