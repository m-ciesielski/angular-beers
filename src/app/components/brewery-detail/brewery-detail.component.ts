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
  beers: Beer[];
  constructor(private breweryService: BreweryService, private beerService: BeerService,
              private route: ActivatedRoute, private location: Location, private router: Router) { }
  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.breweryService.getBrewery(+params['id']))
      .subscribe(brewery => {
          this.brewery = brewery;
          this.getBeers();
        }
      );
  }

  getBeers(): void {
    this.beerService.getBeers().then(
      beers => this.beers = beers.filter(b => b.brewery !== undefined).filter(b => b.brewery.id === this.brewery.id));
  }
  onSelect(beer: Beer): void {
    this.gotoBeer(beer);
  }
  gotoBeer(beer: Beer): void {
    this.router.navigate(['/beers', beer.id]);
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }

}
