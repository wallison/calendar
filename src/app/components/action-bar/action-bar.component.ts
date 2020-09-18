import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Taxonomy} from '../../core/models/taxonomy';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() categories: Taxonomy[];
  @Input() tags: Taxonomy[];

  @Output() dateAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() categoryAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() tagAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(public deviceDetectorService: DeviceDetectorService) { }

  ngOnInit() {
  }

  isDesktop(): boolean {
    return this.deviceDetectorService.isDesktop();
  }

  sendFilterDate(param) {
    this.dateAction.emit(param.value);
  }

  sendFilterCategory(param) {
    this.categoryAction.emit(param.value);
  }

  sendFilterTag(param) {
    this.tagAction.emit(param.value);
  }
}
