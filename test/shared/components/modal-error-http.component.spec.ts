import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorHttpComponent } from '../../../src/app/shared/components/modal-error-http/modal-error-http.component';

describe('ModalErrorHttpComponent', () => {
  let component: ModalErrorHttpComponent;
  let fixture: ComponentFixture<ModalErrorHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalErrorHttpComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrorHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
