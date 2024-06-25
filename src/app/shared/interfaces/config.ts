import { IInfo } from './info';
import { IResult } from './result';

export interface IConfig {
  info: IInfo;
  results: Array<IResult>;
}
