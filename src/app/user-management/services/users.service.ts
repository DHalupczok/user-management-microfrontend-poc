import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";

@Injectable()
export class UsersService {
  private usersSubject$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {id: 1, login: 'user1', role: "user", password: 'password'},
    {id: 2, login: 'user2', role: "user", password: 'password'},
    {id: 3, login: 'user3', role: "user", password: 'password'},
    {id: 4, login: 'user4', role: "user", password: 'password'},
    {id: 5, login: 'user5', role: "user", password: 'password'},
  ])
  user$ = this.usersSubject$.asObservable()
  constructor() {
  }

  removeUser(id: number) {
    const users = this.usersSubject$.getValue();
    const newUsers = users.filter(user => user.id !==id);
    this.usersSubject$.next(newUsers);
  }

  addUser(user: User) {
    const newUsers = [...this.usersSubject$.getValue()];
    newUsers.push(user);
    this.usersSubject$.next(newUsers);
  }
}
