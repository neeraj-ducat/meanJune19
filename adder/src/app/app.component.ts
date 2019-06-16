import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
doSum(frm: FormGroup)
{
  if(frm.invalid)
  {
    // mark its input elements as touched.
    for(let i in frm.controls)
        frm.controls[i].markAsTouched();
  }
  else
  {
  this.sum = parseInt(this.num1) + parseInt(this.num2);
  //value of the flag is changed
  this.flag = false;
  }
}
}
