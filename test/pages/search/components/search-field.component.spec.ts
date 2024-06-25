import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from '../../../../src/app/pages/search/components/search-field/search-field.component';

import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFieldComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      selector: [1, Validators.required],
      name: [''],
      status: [''],
      species: [''],
      type: [''],
      gender: [''],
      dimension: [''],
      episode: [''],
      page: [1],
    });
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
