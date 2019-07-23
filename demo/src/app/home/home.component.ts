import { Component } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'demo';
  name: string;
  twittes: Message[] = [];

  saveTwitte(message: Message): void {
    this.twittes.push(message);
  }
}
