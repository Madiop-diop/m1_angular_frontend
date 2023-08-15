import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepartComponent } from './form-depart.component';

describe('FormDepartComponent', () => {
  let component: FormDepartComponent;
  let fixture: ComponentFixture<FormDepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDepartComponent]
    });
    fixture = TestBed.createComponent(FormDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
