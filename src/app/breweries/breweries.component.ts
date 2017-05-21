import { Component, OnInit } from '@angular/core';
import {Brewery} from '../brewery';
import {BreweryService} from '../brewery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {
  breweries: Brewery[];

  constructor(private breweryService: BreweryService, private router: Router) { }

  ngOnInit() {
    this.breweryService.getBreweries().then(breweries => this.breweries = breweries);
  }

  onSelect(brewery: Brewery): void {
    this.gotoBrewery(brewery);
  }

  gotoBrewery(brewery: Brewery): void {
    this.router.navigate(['/breweries', brewery.id]);
  }

}
