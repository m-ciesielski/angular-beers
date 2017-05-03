import { Component, OnInit } from '@angular/core';
import {BreweryService} from '../brewery.service';
import {Brewery} from '../brewery';

@Component({
  selector: 'app-header-menu-brewery',
  templateUrl: './header-menu-brewery.component.html',
  styleUrls: ['./header-menu-brewery.component.css']
})
export class HeaderMenuBreweryComponent implements OnInit {
  breweries: Brewery[];
  constructor(private breweryService: BreweryService) { }
  ngOnInit() {
    this.getBreweries();
  }
  getBreweries() {
    this.breweryService.getBreweries().then(breweries => this.breweries = breweries);
  }

}
