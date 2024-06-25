import { TestBed } from '@angular/core/testing';

import { EpisodeService } from '../../../src/app/core/services/episode.service';
import { ApiService } from '../../../src/app/core/http/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('EpisodeService', () => {
  let service: EpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });
    service = TestBed.inject(EpisodeService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
