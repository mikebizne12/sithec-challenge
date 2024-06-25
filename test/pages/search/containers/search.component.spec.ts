import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../../../../src/app/pages/search/containers/search/search.component';
import { CharacterService } from '../../../../src/app/core/services/character.service';
import { ApiService } from '../../../../src/app/core/http/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewCharacterComponent } from '../../../../src/app/pages/search/components/view-character/view-character.component';
import { ViewLocationComponent } from '../../../../src/app/pages/search/components/view-location/view-location.component';
import { ViewEpisodeComponent } from '../../../../src/app/pages/search/components/view-episode/view-episode.component';
import { ViewEpisodeCharacterComponent } from '../../../../src/app/pages/search/components/view-episode-character/view-episode-character.component';
import { ViewCharacterComparativeComponent } from '../../../../src/app/pages/search/components/view-character-comparative/view-character-comparative.component';
import { SearchFieldComponent } from '../../../../src/app/pages/search/components/search-field/search-field.component';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [
        SearchComponent,
        SearchFieldComponent,
        ViewCharacterComponent,
        ViewLocationComponent,
        ViewEpisodeComponent,
        ViewEpisodeCharacterComponent,
        ViewCharacterComparativeComponent,
      ],
      providers: [
        CharacterService,
        ApiService,
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.formSearch = formBuilder.group({
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
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });
});
