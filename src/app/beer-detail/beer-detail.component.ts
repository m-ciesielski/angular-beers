import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(private beerService: BeerService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.beerService.getBeer(+params['id']))
      .subscribe(beer => this.beer = beer);
  }

  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }

}
