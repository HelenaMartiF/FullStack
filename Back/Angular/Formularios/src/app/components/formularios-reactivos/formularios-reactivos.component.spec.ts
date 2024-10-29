import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReactivosComponent } from './formularios-reactivos.component';

describe('FormulariosReactivosComponent', () => {
  let component: FormulariosReactivosComponent;
  let fixture: ComponentFixture<FormulariosReactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariosReactivosComponent]
    });
    fixture = TestBed.createComponent(FormulariosReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
