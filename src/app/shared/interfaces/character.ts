import { IEpisode } from './episode';
import { ILocation } from './location';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin: any;
  location: ILocation;
  image: string;
  episode: Array<string>;
  episode_detail: IEpisode;
}
