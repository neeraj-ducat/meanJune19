import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {

  toBeSent: string;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  send() {
    this.valueChanged.emit(this.toBeSent);
  }

}
