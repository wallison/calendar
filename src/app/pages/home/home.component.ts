import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {CalendarService} from '../../core/services/calendar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public deviceDetectorService: DeviceDetectorService) { }

  ngOnInit() {
  }

  isDesktop() {
    return this.deviceDetectorService.isDesktop();
  }
}
