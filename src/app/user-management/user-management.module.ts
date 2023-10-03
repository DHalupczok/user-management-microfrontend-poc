import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import {UsersService} from "./services/users.service";


@NgModule({
  declarations: [
    UserManagementComponent,
    AddUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule
  ],
  providers: [UsersService]
})
export class UserManagementModule { }
