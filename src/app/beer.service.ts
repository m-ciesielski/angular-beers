import { Injectable } from '@angular/core';
import {Beer} from './beer';
import {BEERS} from './mock-beers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppState {
  beers: Beer[];
}

@Injectable()
export class BeerService {
  private beers: Observable<Array<Beer>>;
  private lastId: number;
  constructor(private store: Store<AppState>) {
    this.beers = store.select('beers');
    this.beers.subscribe((beers: Beer[]) => this.lastId = Math.max.apply(Math, beers.map(beer => beer.id)));
  };
  getBeers(): Observable<Array<Beer>> {
    return this.beers;
  };
  getBeer(id: number): Promise<Beer> {
    let beer: Beer = new Beer();
    this.beers.subscribe((beers: Beer[]) => beer = beers.find(b => b.id === id));
    return Promise.resolve(beer);
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
    this.store.dispatch({type: 'ADD', payload: beer});
  }
}
