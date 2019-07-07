import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] =[
    {name: 'Neeraj', mailId: 'a@b.com', password: '1234', role:'user'},
    {name: 'Raman', mailId: 'raman@gmail.com', password: 'abcd', role:'admin'},
   
  ];

  authenticated: User = null;

  constructor() { }

  authenticate(user: User) {
    
    for(let i in this.users)
    {
      if(this.users[i].mailId === user.mailId && this.users[i].password === user.password) {
        this.authenticated = this.users[i];
        break;
      }
    }
  }

}
