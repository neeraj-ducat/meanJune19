import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // loading users data
    this.userService.getUsers()
    .subscribe((result)=>{
      // result is stored in the service array
      this.userService.users = result;
    });

  }

}
