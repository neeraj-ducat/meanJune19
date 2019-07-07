import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // to receive form data
  user: User;
  
  constructor(private auth: AuthService,
    private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.auth.authenticate(this.user);
    if(this.auth.authenticated === null) {
      console.log('Invalid credentials');
    }
    else if( this.auth.authenticated.role === 'user')
      this.router.navigate(['user']);
    else
    this.router.navigate(['admin']);
  
  }
}
