import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContainerMobileComponent } from './event-container-mobile.component';

describe('EventContainerMobileComponent', () => {
  let component: EventContainerMobileComponent;
  let fixture: ComponentFixture<EventContainerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventContainerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContainerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
