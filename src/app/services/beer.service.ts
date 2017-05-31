import { Injectable } from '@angular/core';
import {Beer} from '../models/beer';
import {BEERS} from './mock-beers';

@Injectable()
export class BeerService {
  constructor() { };
  getBeers(): Promise<Beer[]> {
    return Promise.resolve(BEERS);
  };
  getBeer(id: number): Promise<Beer> {
    return Promise.resolve(this.getBeers().then(beers => beers.find(b => b.id === id)));
  };
  getBeersSlowly(): Promise<Beer[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBeers()), 2000);
    });
  }
  addBeer(beer: Beer) {
    BEERS.push(beer);
  }
  deleteBeer(id: number) {
    console.log('Delete beer with id: ' + id);
    BEERS.splice(id, 1);
  }
}
