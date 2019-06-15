import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // variable to receive form data
 num1: string;
 num2: string;
// variable to store the sum
sum: number = 0;
// variable to control the display result div
flag: boolean = true;
//function to do the sum
doSum()
{
 this.sum = parseInt(this.num1) + parseInt(this.num2);
 //value of the flag is changed
 this.flag = false;
}
}
