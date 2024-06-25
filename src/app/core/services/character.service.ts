import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(public apiService: ApiService) {}

  filterCharacters(params?: any) {
    return this.apiService.get('character/', params);
  }

  getSingleCharacter(id: number) {
    return this.apiService.get('character/' + id);
  }
  getMultiplerCharacter(ids: Array<number>) {
    return this.apiService.get('character/' + ids);
  }
}
