
/* tslint:disable:variable-name */
import {CalendarEvent} from './calendar-event';

export class CalendarPage {
  total: number;
  from: number;
  size: number;
  has_prior: boolean;
  has_next: boolean;
  items: CalendarEvent[];

  constructor() {
    this.items = [];
  }
}
