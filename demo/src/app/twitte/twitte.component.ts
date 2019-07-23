import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-twitte',
  templateUrl: './twitte.component.html',
  styleUrls: ['./twitte.component.scss']
})
export class TwitteComponent implements OnInit {
  title = '';
  content = '';

  @Output() twitte: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() { }

  onSend(): void {
    this.twitte.emit({
      title: this.title,
      content: this.content
    });

    this.title = '';
    this.content = '';
  }
}
