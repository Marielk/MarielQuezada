import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWorkComponent } from './button-work.component';

describe('ButtonWorkComponent', () => {
  let component: ButtonWorkComponent;
  let fixture: ComponentFixture<ButtonWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
