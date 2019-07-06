import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.mode';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Array to store users data;
  users: User[];
  constructor(private http: HttpClient) { }

  // Mehtod to fetch users from the api
  getUsers() :Observable<User[]> {
    return this.http.get<User[]>(environment.api_url);
  }

  // Mehtod to create a user in the api
  createUser(user: User) :Observable<User> {
    user.id = this.users.length+1;
    return this.http.post<User>(environment.api_url,user);
  }
}
