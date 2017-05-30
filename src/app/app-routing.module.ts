import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeersComponent} from './beers/beers.component';
import {BreweryDetailComponent} from './brewery-detail/brewery-detail.component';
import {BeerAddComponent} from './beer-add/beer-add.component';
import {BreweriesComponent} from './breweries/breweries.component';
import {BreweryAddComponent} from './brewery-add/brewery-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'beers/add', component: BeerAddComponent },
  { path: 'beers/:id', component: BeerDetailComponent },
  { path: 'beers',     component: BeersComponent },
  { path: 'breweries/add',     component: BreweryAddComponent },
  { path: 'breweries/:id',     component: BreweryDetailComponent },
  { path: 'breweries',     component: BreweriesComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
