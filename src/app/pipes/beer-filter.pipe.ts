import { Pipe, PipeTransform } from '@angular/core';
import {Beer} from '../beer';

@Pipe({
  name: 'beerFilter'
})
export class BeerFilterPipe implements PipeTransform {

  transform(beers: Beer[], key: string, value: any): any {
    if (!beers || !key || !value) {
      return beers;
    }
    // TODO: create filter model?
    if (key === 'name') {
      return beers.filter(b => b.name.toLowerCase().includes(value.toLowerCase()));
    }

    if (key === 'priceMin') {
      return beers.filter(b => b.price > value);
    }

    if (key === 'priceMax') {
      return beers.filter(b => b.price < value);
    }
    return beers;
  }

}
