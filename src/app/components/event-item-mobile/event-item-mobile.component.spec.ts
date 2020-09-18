import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemMobileComponent } from './event-item-mobile.component';

describe('EventItemMobileComponent', () => {
  let component: EventItemMobileComponent;
  let fixture: ComponentFixture<EventItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
