import { Component } from '@angular/core';
import {EventContainerComponent} from '../event-container/event-container.component';

@Component({
  selector: 'app-event-container-mobile',
  templateUrl: './event-container-mobile.component.html',
  styleUrls: ['./event-container-mobile.component.scss']
})
export class EventContainerMobileComponent extends EventContainerComponent {
}
