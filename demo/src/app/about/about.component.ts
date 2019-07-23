import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  getQuote() {
    // this.http.get('https://api.chucknorris.io/jokes/random')
    //   .subscribe(
    //   data => {

    //   }
    );
  }

}
