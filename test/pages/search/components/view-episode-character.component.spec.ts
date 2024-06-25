import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEpisodeCharacterComponent } from '../../../../src/app/pages/search/components/view-episode-character/view-episode-character.component';
import { CharacterService } from '../../../../src/app/core/services/character.service';

import { ApiService } from '../../../../src/app/core/http/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ViewEpisodeCharacterComponent', () => {
  let component: ViewEpisodeCharacterComponent;
  let fixture: ComponentFixture<ViewEpisodeCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ViewEpisodeCharacterComponent],
      providers: [CharacterService, ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpisodeCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
