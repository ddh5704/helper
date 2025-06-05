import { Injectable } from '@angular/core';
import { lookup } from 'zipcodes';
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  getCityStateByZip(zip: string | number) {
    var result = lookup(zip);
    return { zip: result.zip, state: result.state, city: result.city };
  }
}
