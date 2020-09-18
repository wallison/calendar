import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../../core/services/calendar.service';
import {PageEvent} from '@angular/material';
import {CalendarPage} from '../../../core/models/calendar-page';
import {finalize} from 'rxjs/operators';
import {Taxonomy} from '../../../core/models/taxonomy';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit {
  title = 'Calendar';
  // MatPaginator Inputs
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  // MatPaginator Output
  pageEvent: PageEvent;

  // filters
  startDate: Date;
  categoryId: number;
  tagId: number;

  // event items
  events: CalendarPage = new CalendarPage();
  categories: Taxonomy[] = [];
  tags: Taxonomy[] = [];
  loading = false;

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.loading = true;
    this.calendarService.setCalendarId()
      .subscribe(
        (value) => {
          this.loadTaxonomies();
          this.loadEvents();
        },
        (err) => {
          console.log(err);
        }
    );
  }

  getPage() {
    if (this.pageEvent) {
      return this.pageEvent.pageIndex + 1;
    }
    return 1;
  }

  loadEvents() {
    const params = {
      page: this.getPage(),
      per_page: this.pageSize,
      date: this.startDate,
      categories: this.categoryId,
      tags: this.tagId
    };
    this.loading = true;
    this.calendarService.fetchCalendarEvents(params)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (result) => {
          this.events = result;
          this.length = result.total;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  loadTaxonomies() {
    this.calendarService.fetchCalendarTaxonomies()
      .subscribe(
        (result) => {
          const queryCategory = 'categories';
          const queryTag = 'tags';
          for (const group of result) {
            if (group.query_name === queryCategory) {
              this.categories = group.items;
            } else if (group.query_name === queryTag) {
              this.tags = group.items;
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  changePage(page) {
    this.pageEvent = page;
    this.pageSize = this.pageEvent.pageSize;
    this.loadEvents();
  }

  filterDateEvents(startDate) {
    this.startDate = startDate;
    this.loadEvents();
  }

  filterCategoryEvents(categoryId) {
    this.categoryId = categoryId;
    this.loadEvents();
  }

  filterTagEvents(tagId) {
    this.tagId = tagId;
    this.loadEvents();
  }
}
