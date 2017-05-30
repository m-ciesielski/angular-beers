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
    return Promise.resolve(this.getBreweries().then(breweries => breweries.find(b => b.id === id)));
  };
  addBrewery(beer: Beer) {
    BREWERIES.push(beer);
  }
  deleteBrewery(id: number) {
    console.log('Delete beer with id: ' + id);
    BREWERIES.splice(id, 1);
  }

}
