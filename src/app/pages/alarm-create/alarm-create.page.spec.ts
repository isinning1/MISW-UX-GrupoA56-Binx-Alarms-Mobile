import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmCreatePage } from './alarm-create.page';

describe('AlarmCreatePage', () => {
  let component: AlarmCreatePage;
  let fixture: ComponentFixture<AlarmCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
