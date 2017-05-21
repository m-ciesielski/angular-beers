import { Component, OnInit } from '@angular/core';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html',
  styleUrls: ['./beer-add.component.css']
})
export class BeerAddComponent implements OnInit {
  model = new Beer();
  constructor(private beerService: BeerService, private location: Location) { }
  ngOnInit() {
    this.model.id = 999;
  }
  addBeer() {
    console.log(this.model);
    this.beerService.addBeer(this.model);
    this.beerService.getBeers().then(beers => console.log(beers));
    this.goBack();
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }
}
