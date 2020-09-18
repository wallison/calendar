import { Component } from '@angular/core';
import {EventItemComponent} from '../event-item/event-item.component';

@Component({
  selector: 'app-event-item-mobile',
  templateUrl: './event-item-mobile.component.html',
  styleUrls: ['./event-item-mobile.component.scss']
})
export class EventItemMobileComponent extends EventItemComponent {

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
