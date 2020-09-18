import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDesktopComponent } from './pages/home/home-desktop/home-desktop.component';
import { HomeMobileComponent } from './pages/home/home-mobile/home-mobile.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import { EventContainerComponent } from './containers/event-container/event-container.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { EventContainerMobileComponent } from './containers/event-container-mobile/event-container-mobile.component';
import { EventItemMobileComponent } from './components/event-item-mobile/event-item-mobile.component';
import { EventDetailsComponent } from './containers/dialogs/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDesktopComponent,
    HomeMobileComponent,
    EventContainerComponent,
    EventItemComponent,
    ActionBarComponent,
    EventContainerMobileComponent,
    EventItemMobileComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DeviceDetectorService],
  bootstrap: [AppComponent],
  entryComponents: [
    EventDetailsComponent
  ]
})
export class AppModule { }
