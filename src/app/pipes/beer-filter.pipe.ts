import { Pipe, PipeTransform } from '@angular/core';
import {Beer} from '../beer';

@Pipe({
  name: 'beerFilter'
})
export class BeerFilterPipe implements PipeTransform {
  // static sortByRating(beers: Beer[]): void {
  //   beers.sort(b => b.rating);
  //   beers.reverse();
  // }
  sort(beers: Beer[]): void {
    beers.sort((a, b) => {
     if (a.rating < b.rating) {
        return 1;
      } else if (a.rating > b.rating) {
        return -1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
  // sort(beers: Beer[]): void {
  //   BeerFilterPipe.sortByRating(beers);
  //   BeerFilterPipe.sortByName(beers);
  // }
  transform(beers: Beer[], key: string, value: any): any {
    if (!beers || !key || !value) {
      return beers;
    }
    // Sort before filtering
    this.sort(beers);

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
