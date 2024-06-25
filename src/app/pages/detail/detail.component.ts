import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/shared/interfaces/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  character$: Observable<ICharacter>;

  constructor(
    private store: Store,
    private location: Location,
  ) {
    this.character$ = this.store.select((state) => state.character.item);
  }

  goBack() {
    this.location.back();
  }
}
