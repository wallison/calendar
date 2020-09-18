import { Component} from '@angular/core';
import {HomeDesktopComponent} from '../home-desktop/home-desktop.component';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent extends HomeDesktopComponent {
}
