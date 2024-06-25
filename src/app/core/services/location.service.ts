import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(public apiService: ApiService) {}

  filterLocations(params?: any) {
    return this.apiService.get('location/', params);
  }
}
