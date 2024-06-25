import { ICharacter } from "src/app/shared/interfaces/character";

export class GetCharacters {
  static readonly type = '[Character] Get items';
  constructor(public payload: string) {}
}

export class SetCharacter {
  static readonly type = '[Character] Set  item';
  constructor(public payload: ICharacter) {}
}
