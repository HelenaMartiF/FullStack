import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosClasicosComponent } from './formularios-clasicos.component';

describe('FormulariosClasicosComponent', () => {
  let component: FormulariosClasicosComponent;
  let fixture: ComponentFixture<FormulariosClasicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariosClasicosComponent]
    });
    fixture = TestBed.createComponent(FormulariosClasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
