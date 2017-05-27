import { ActionReducer, Action } from '@ngrx/store';
import {Beer} from './app/beer';
import {BEERS} from './app/mock-beers';

export const ADD = 'ADD';

export function beersReducer(beers: Beer[] = BEERS, action: Action) {
  switch (action.type) {
    case ADD: {
      beers.push(action.payload);
      return beers;
    }
    default:
      return beers;
  }
}
