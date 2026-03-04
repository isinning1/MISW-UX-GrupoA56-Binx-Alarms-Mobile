import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmRingPage } from './alarm-ring.page';

describe('AlarmRingPage', () => {
  let component: AlarmRingPage;
  let fixture: ComponentFixture<AlarmRingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmRingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
