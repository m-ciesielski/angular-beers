import { Component, OnInit } from '@angular/core';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers().then(beers => this.beers = beers.slice(1, 5));
  }
}
