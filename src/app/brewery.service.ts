import { Injectable } from '@angular/core';
import {Brewery} from './brewery';
import {BREWERIES} from './mock-breweries';
import {Beer} from './beer';

@Injectable()
export class BreweryService {

  constructor() { }

  getBreweries(): Promise<Brewery[]> {
    return Promise.resolve(BREWERIES);
  };
  getBrewery(id: number): Promise<Brewery> {
    return Promise.resolve(this.getBreweries().then(beers => beers.find(b => b.id === id)));
  };

}
