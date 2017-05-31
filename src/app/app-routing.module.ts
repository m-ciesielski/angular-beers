import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';
import {BeersComponent} from './components/beers/beers.component';
import {BreweryDetailComponent} from './components/brewery-detail/brewery-detail.component';
import {BeerAddComponent} from './components/beer-add/beer-add.component';
import {BreweriesComponent} from './components/breweries/breweries.component';
import {BreweryAddComponent} from './components/brewery-add/brewery-add.component';

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
