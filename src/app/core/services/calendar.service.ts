import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CalendarPage} from '../models/calendar-page';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  path = '/api/calendars';
  CONFIGURATION_PATH = '/api/calendars/info?url=https://calendar.time.ly/ficceyp4';
  CALENDAR_ID: number;

  constructor(private httpClient: HttpClient) { }

  setCalendarId(): Observable<any> {
    return this.httpClient.post(`${environment.backEndUrl}${this.CONFIGURATION_PATH}`, {}).pipe(
      map((result: any) => {
        this.CALENDAR_ID = result.data.id;
        return result;
      }),
      catchError((err) => {
        // TODO Process errors
        return err;
      })
    );
  }

  fetchCalendarEvents(filter: any): Observable<CalendarPage> {
    let params = new HttpParams();

    if (filter.page) {
      params = params.append('page', filter.page);
    }
    if (filter.per_page) {
      params = params.append('per_page', filter.per_page);
    }
    if (filter.date) {
      const formattedDate = `${filter.date.getMonth() + 1}/${filter.date.getDate()}/${filter.date.getFullYear()}`;
      params = params.append('start_date', formattedDate);
    }
    if (filter.categories) {
      params = params.append('categories', filter.categories);
    }
    if (filter.tags) {
      params = params.append('tags', filter.tags);
    }
    return this.httpClient.get<CalendarPage>(`${environment.backEndUrl}${this.path}/${this.CALENDAR_ID}/events`,
      {params})
      .pipe(
      map((result: any) => {
        return result.data;
      }),
      catchError((err) => {
        // TODO Process errors
        return err;
      })
    );
  }

  fetchCalendarTaxonomies(): Observable<any> {
    return this.httpClient.get<any>(`${environment.backEndUrl}${this.path}/${this.CALENDAR_ID}/taxonomies`)
      .pipe(
        map((result: any) => {
          return result.data;
        }),
        catchError((err) => {
          // TODO Process errors
          return err;
        })
      );
  }
}
