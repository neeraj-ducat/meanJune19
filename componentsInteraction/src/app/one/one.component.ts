import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

 @Input() toBeReceived: string;

  constructor() { }

  ngOnInit() {
  }

}
