import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitte',
  templateUrl: './twitte.component.html',
  styleUrls: ['./twitte.component.scss']
})
export class TwitteComponent implements OnInit {
  title = '';
  content = '';

  @Output() twitte: EventEmitter<{ title: string, content: string }> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSend(): void {
    this.twitte.emit({
      title: this.title,
      content: this.content
    });
  }
}
