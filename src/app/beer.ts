import {Brewery} from './brewery';
import {BeerStyle} from './beerStyle';
export class Beer {
  id: number;
  name: string;
  price?: number;
  brewery?: Brewery;
  rating?: number;
}
