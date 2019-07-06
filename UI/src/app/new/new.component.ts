import { Component, OnInit } from '@angular/core';
import { User } from '../user.mode';
import { UserService } from '../user.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  // to receive form data
  user: User;
  constructor(private userService: UserService,
    private alertService: AlertService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  save() {
    //copy of the form object is created
    let toBeSaved = Object.assign({},this.user);
    this.userService.createUser(toBeSaved)
    .subscribe(result => {
      // saved user is added to the server array.
      this.userService.users.push(result);
      this.alertService.success('Successfully added.');
    });
  }
}
