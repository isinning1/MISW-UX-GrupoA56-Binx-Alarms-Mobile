import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmReprogramPage } from './alarm-reprogram.page';

describe('AlarmReprogramPage', () => {
  let component: AlarmReprogramPage;
  let fixture: ComponentFixture<AlarmReprogramPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmReprogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
