import {Component, OnInit} from '@angular/core';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beers',
  providers: [BeerService],
  styleUrls: ['./beers.component.css'],
  templateUrl: './beers.component.html'
})
export class BeersComponent implements OnInit {
  title = 'app works!';
  selectedBeer: Beer;
  beers: Beer[];

  constructor(private beerService: BeerService, private router: Router) { }

  ngOnInit(): void {
    this.getBeers();
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  getBeers(): void {
    this.beerService.getBeers().then(beers => this.beers = beers);
  }

  gotoBeer(): void {
    this.router.navigate(['/beers', this.selectedBeer.id]);
  }

}
