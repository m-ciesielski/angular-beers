import { Pipe, PipeTransform } from '@angular/core';
import {Brewery} from '../models/brewery';

@Pipe({
  name: 'breweryFilter'
})
export class BreweryFilterPipe implements PipeTransform {
  // sort(breweries: Brewery[]): void {
  //   breweries.sort((a, b) => {
  //     if (a.rating < b.rating) {
  //       return 1;
  //     } else if (a.rating > b.rating) {
  //       return -1;
  //     } else {
  //       return a.name.localeCompare(b.name);
  //     }
  //   });
  // }
  transform(breweries: Brewery[], key: string, value: any): any {
    if (!breweries || !key || !value) {
      return breweries;
    }
    // Sort before filtering
    // this.sort(breweries);

    if (key === 'name') {
      return breweries.filter(b => b.name.toLowerCase().includes(value.toLowerCase()));
    }
    return breweries;
  }

}
