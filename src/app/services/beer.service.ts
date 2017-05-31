import { Injectable } from '@angular/core';
import {Beer} from '../models/beer';
import {BEERS} from './mock-beers';

@Injectable()
export class BeerService {
  lastId: number;
  constructor() {
    this.getBeers().then(beers => this.lastId = Math.max.apply(null, beers.map(b => b.id)));
  };
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
    this.lastId += 1;
    beer.id = this.lastId;
    BEERS.push(beer);
  }
  deleteBeer(beer: Beer) {
    console.log('Delete beer with id: ' + beer.id);
    BEERS.splice(BEERS.indexOf(beer), 1);
  }
}
