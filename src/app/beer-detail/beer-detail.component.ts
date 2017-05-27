import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Beer} from '../beer';
import {BeerService} from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor(private route: ActivatedRoute, private location: Location,
  private router: Router, private beerService: BeerService) { }

  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.beerService.getBeer(+params['id']))
      .subscribe(beer => this.beer = beer);
  }

  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }
  goToBrewery(): void {
    this.router.navigate(['/breweries', this.beer.brewery.id]);
  }
  deleteBeer(): void {
    this.beerService.deleteBeer(this.beer.id);
  }
}
