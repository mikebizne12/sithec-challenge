import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterComparativeComponent } from '../../../../src/app/pages/search/components/view-character-comparative/view-character-comparative.component';
import { CharacterService } from '../../../../src/app/core/services/character.service';

import { ApiService } from '../../../../src/app/core/http/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ViewCharacterComparativeComponent', () => {
  let component: ViewCharacterComparativeComponent;
  let fixture: ComponentFixture<ViewCharacterComparativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ViewCharacterComparativeComponent],
      providers: [CharacterService, ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterComparativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
