import { Injectable } from '@angular/core';
import {Beer} from './beer';
import {BEERS} from './beer-detail/mock-beers';

@Injectable()
export class BeerService {
  constructor() { };
  getBeers(): Promise<Beer[]> {
    return Promise.resolve(BEERS);
  };
  getBeer(id: Number): Promise<Beer> {
    return Promise.resolve(this.getBeers().then(beers => beers.find(b => b.id === id)));
  };
  getBeersSlowly(): Promise<Beer[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBeers()), 2000);
    });
  }
}
