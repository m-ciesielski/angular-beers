import { Injectable } from '@angular/core';
import {Brewery} from '../models/brewery';
import {BREWERIES} from './mock-breweries';
import {Beer} from '../models/beer';
import {BEERS} from './mock-beers';

@Injectable()
export class BreweryService {
  lastId: number;
  constructor() {
    this.getBreweries().then(breweries => this.lastId = Math.max.apply(null, breweries.map(b => b.id)));
  }

  getBreweries(): Promise<Brewery[]> {
    return Promise.resolve(BREWERIES);
  };
  getBrewery(id: number): Promise<Brewery> {
    return Promise.resolve(this.getBreweries().then(breweries => breweries.find(b => b.id === id)));
  };
  addBrewery(brewery: Brewery) {
    this.lastId += 1;
    brewery.id = this.lastId;
    BREWERIES.push(brewery);
  }
  deleteBrewery(brewery: Brewery) {
    console.log('Delete brewery with id: ' + brewery.id);
    BREWERIES.splice(BREWERIES.indexOf(brewery), 1);
  }
  getBeers(brewery: Brewery) {
    return BEERS.filter(b => b.brewery !== undefined).filter(b => b.brewery.id === brewery.id);
  }
  getAverageRating(brewery: Brewery) {
    const breweryBeers = this.getBeers(brewery);
    return breweryBeers.map(b => b.rating).reduce((a, b) => a + b, 0) / breweryBeers.length;
  }

}
