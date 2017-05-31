import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Brewery} from '../../models/brewery';
import {BreweryService} from '../../services/brewery.service';
import {Beer} from '../../models/beer';
import {BeerService} from '../../services/beer.service';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})
export class BreweryDetailComponent implements OnInit {
  @Input() brewery: Brewery;
  averageRating: number;
  constructor(private breweryService: BreweryService,
              private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.breweryService.getBrewery(+params['id']))
      .subscribe(
        brewery => {
          this.brewery = brewery;
          this.averageRating = this.breweryService.getAverageRating(brewery);
        }
      );
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }
  deleteBrewery(): void {
    this.breweryService.deleteBrewery(this.brewery);
    this.goBack();
  }

}
