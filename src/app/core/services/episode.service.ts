import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(public apiService: ApiService) {}

  filterEpisodes(params?: any) {
    return this.apiService.get('episode/', params);
  }

  getSingleEpisode(id: number) {
    return this.apiService.get('episode/' + id);
  }
}
