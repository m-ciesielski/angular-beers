import {Brewery} from './brewery';
export class Beer {
  id: number;
  name: string;
  price?: number;
  brewery?: Brewery;
  rating?: number;
}
