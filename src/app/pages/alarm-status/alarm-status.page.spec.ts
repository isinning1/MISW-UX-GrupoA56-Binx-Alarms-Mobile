import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmStatusPage } from './alarm-status.page';

describe('AlarmStatusPage', () => {
  let component: AlarmStatusPage;
  let fixture: ComponentFixture<AlarmStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
