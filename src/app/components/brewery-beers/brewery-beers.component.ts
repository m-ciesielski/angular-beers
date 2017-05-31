import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BeerService} from '../../services/beer.service';
import {BreweryService} from '../../services/brewery.service';
import {Brewery} from '../../models/brewery';
import {Beer} from '../../models/beer';
import {Location} from '@angular/common';

@Component({
  selector: 'app-brewery-beers',
  templateUrl: './brewery-beers.component.html',
  styleUrls: ['./brewery-beers.component.css']
})
export class BreweryBeersComponent implements OnInit {
  @Input() brewery: Brewery;
  beers: Beer[];
  nameFilter: string;
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
    this.beers = this.breweryService.getBeers(this.brewery);
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
