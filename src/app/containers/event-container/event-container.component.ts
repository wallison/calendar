import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent} from '../../core/models/calendar-event';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {
  @Input() events: CalendarEvent[];

  constructor() { }

  ngOnInit() {
  }

}
