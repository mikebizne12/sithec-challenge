import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../../src/app/core/http/api.service';

import { LocationService } from '../../../src/app/core/services/location.service';
import { HttpClientModule } from '@angular/common/http';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });
    service = TestBed.inject(LocationService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
