import { Component } from '@angular/core';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  name: string;
  twittes: Message[] = [];

  saveTwitte(message: Message): void {
    this.twittes.push(message);
  }
}
