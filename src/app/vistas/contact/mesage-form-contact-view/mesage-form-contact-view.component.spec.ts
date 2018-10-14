import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesageFormContactViewComponent } from './mesage-form-contact-view.component';

describe('MesageFormContactViewComponent', () => {
  let component: MesageFormContactViewComponent;
  let fixture: ComponentFixture<MesageFormContactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesageFormContactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesageFormContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
