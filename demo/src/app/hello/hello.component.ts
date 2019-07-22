import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  // template: `<h1 class="title">Hello World {{ text }}</h1>`,
  styleUrls: ['./hello.component.scss']
  // styles: [`
  //   .title {
  //     color: red;
  //   }
  // `]
})
export class HelloComponent implements OnInit {
  text = '';
  value: any = true;

  constructor() { }

  ngOnInit() {
  }

  sayHello(name: string): string {
    return 'Hello ' + name;
  }
}
