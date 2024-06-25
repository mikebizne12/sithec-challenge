import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/shared/interfaces/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
