import { Component, ViewChild} from '@angular/core';
import { TwoComponent } from './two/two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toBeSent = 'It will be received by both childs.';
  // to receive the reference of the child component.
  @ViewChild('two')
  child: TwoComponent;
  received: string;
  send() {
    this.child.toBeReceived = this.toBeSent;
  }
  receive (received: string){
    this.received = received;
  }
}
