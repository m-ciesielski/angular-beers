import { Component, OnInit } from '@angular/core';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';
import {Location} from '@angular/common';
import {BreweryService} from '../brewery.service';
import {Brewery} from '../brewery';

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html',
  styleUrls: ['./beer-add.component.css']
})
export class BeerAddComponent implements OnInit {
  model = new Beer();
  breweries: Brewery[];
  constructor(private beerService: BeerService, private breweryService: BreweryService, private location: Location) { }
  ngOnInit() {
    this.model.id = 999;
    this.breweryService.getBreweries().then(breweries => this.breweries = breweries);
  }
  addBeer() {
    console.log(this.model);
    this.beerService.addBeer(this.model);
    this.goBack();
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }
}
