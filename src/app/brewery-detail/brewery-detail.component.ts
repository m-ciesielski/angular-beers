import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Brewery} from '../brewery';
import {BreweryService} from '../brewery.service';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})
export class BreweryDetailComponent implements OnInit {
  @Input() brewery: Brewery;
  constructor(private breweryService: BreweryService, private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    this.route.params.
    switchMap((params: Params) => this.breweryService.getBrewery(+params['id']))
      .subscribe(brewery => this.brewery = brewery);
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }

}
