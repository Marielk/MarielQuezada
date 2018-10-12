import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveMenuComponent } from './responsive-menu.component';

describe('ResponsiveMenuComponent', () => {
  let component: ResponsiveMenuComponent;
  let fixture: ComponentFixture<ResponsiveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
