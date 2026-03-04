import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmPostponePage } from './alarm-postpone.page';

describe('AlarmPostponePage', () => {
  let component: AlarmPostponePage;
  let fixture: ComponentFixture<AlarmPostponePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmPostponePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
