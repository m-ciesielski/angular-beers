import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Brewery} from '../brewery';
import {BreweryService} from '../brewery.service';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})
export class BreweryDetailComponent implements OnInit {
  @Input() brewery: Brewery;
  beers: Beer[];
  constructor(private breweryService: BreweryService, private beerService: BeerService,
              private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.breweryService.getBrewery(+params['id']))
      .subscribe(brewery => this.brewery = brewery);
    // TODO: FIX this
    this.beerService.getBeers().then(
      beers => this.beers = beers.filter(b => b.brewery !== undefined).filter(b => b.brewery.id === this.brewery.id));
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }

}
