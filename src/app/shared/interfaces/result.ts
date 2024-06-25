import { ILocation } from './location';
import { IEpisode } from 'src/app/shared/interfaces/episode';

export interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin: object;
  location: ILocation;
  image: string;
  episode: Array<string>;
  episode_detail: IEpisode;
  residents?: Array<string>;
  dimension?: string;
  created?: string;
  air_date?: string;
  characters?: Array<string>;
  compared?: boolean;
  disabled?: boolean;
}
