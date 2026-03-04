import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmEditPage } from './alarm-edit.page';

describe('AlarmEditPage', () => {
  let component: AlarmEditPage;
  let fixture: ComponentFixture<AlarmEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
