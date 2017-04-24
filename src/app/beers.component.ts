import {Component, OnInit} from '@angular/core';
import {Beer} from './beer';
import {BeerService} from './beer.service';

@Component({
  selector: 'app-beers',
  providers: [BeerService],
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .beers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .beers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .beers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .beers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .beers .text {
      position: relative;
      top: -3px;
    }
    .beers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  template: `    
    <ul class="beers">
      <li *ngFor="let beer of beers" (click)="onSelect(beer)" [class.selected]="beer === selectedBeer">
        <span class="badge">{{beer.id}}</span> {{beer.name}}
      </li>
    </ul>
    <app-beer-detail [beer]="selectedBeer"></app-beer-detail>
  `
})
export class BeersComponent implements OnInit {
  title = 'app works!';
  selectedBeer: Beer;
  beers: Beer[];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  getBeers(): void {
    this.beerService.getBeersSlowly().then(beers => this.beers = beers);
  }

}
