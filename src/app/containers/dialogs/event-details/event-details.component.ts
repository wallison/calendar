import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent} from '../../../core/models/calendar-event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input() item: CalendarEvent;
  DEFAULT_IMAGE = '../../../assets/images/commum-event.svg';

  constructor() { }

  ngOnInit() {
  }

  getFirstImage() {
    if (this.item && this.item.images && this.item.images.length) {
      for (const img of this.item.images) {
        if (img.thumbnail && img.thumbnail.url) {
          return img.thumbnail.url;
        }
      }
    }
    return this.DEFAULT_IMAGE;
  }
}
