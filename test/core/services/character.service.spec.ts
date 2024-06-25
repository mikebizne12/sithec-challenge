import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../../src/app/core/http/api.service';
import { CharacterService } from '../../../src/app/core/services/character.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });
    service = TestBed.inject(CharacterService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
