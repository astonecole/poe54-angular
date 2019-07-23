import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  name: string;
  twittes: { title: string, content: string }[] = [];

  saveTwitte(data: { title: string, content: string }): void {
    this.twittes.push(data);
  }
}
