import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent} from '../../core/models/calendar-event';
import {EventDetailsComponent} from '../../containers/dialogs/event-details/event-details.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() item: CalendarEvent;
  DEFAULT_IMAGE = '../../assets/images/commum-event.svg';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getFirstImage() {
    if (this.item && this.item.images && this.item.images.length) {
      for (const img of this.item.images) {
        if (img.small && img.small.url) {
          return img.small.url;
        }
      }
    }
    return this.DEFAULT_IMAGE;
  }

  openDetails() {
    const instance = this.dialog.open(EventDetailsComponent, { disableClose: false });
    instance.componentInstance.item = this.item;
  }
}
