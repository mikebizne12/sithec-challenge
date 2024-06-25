import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCharacters, SetCharacter } from './character.actions';
import { ICharacter } from 'src/app/shared/interfaces/character';


export class CharacterStateModel {
  public items!: string[];

  public item!: ICharacter;
}

const defaults: CharacterStateModel = {
  items: [],
  item: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {},
    location: {
      url: '',
      name: '',
      dimension: '',
      residents: [],
      created: '',
    },
    image: '',
    episode: [],
    episode_detail: {
      name: '',
      air_date: '',
      episode: '',
      characters: [],
    },
  },
};

@State<CharacterStateModel>({
  name: 'character',
  defaults,
})
@Injectable()
export class CharacterState {
  @Selector()
  static getState(state: CharacterStateModel) {
    return state;
  }

  @Selector()
  static getCharacters(state: CharacterStateModel) {
    return state.items;
  }

  @Action(GetCharacters)
  add(
    { getState, patchState }: StateContext<CharacterStateModel>,
    { payload }: GetCharacters
  ) {
    const state = getState();
    patchState({ items: [...state.items, payload] });
  }
  @Selector()
  static getSelectedCharacter(state: CharacterStateModel) {
    return state.item;
  }

  @Action(SetCharacter)
  setCharacter(
    { patchState }: StateContext<CharacterStateModel>,
    { payload }: SetCharacter
  ) {
    patchState({
      item: payload,
    });
  }
}
