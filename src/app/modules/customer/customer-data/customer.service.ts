import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class CustomerSerivce {

  constructor() {}

  getCustomers() {
    const customers = [
      {id: '3423', name: 'Tailor', email: 'tailor@yahoo.com',
        products: [{name: 'Samsung'}, {name: 'Apple'}]},
      {id: '1396', name: 'Simon', email: 'simon@hotmail.com',
        products: [{name: 'Huawei'}, {name: 'Samsung'}, {name: 'Nokia'}]},
      {id: '1678', name: 'Filip', email: 'tailor@gmail.com',
        products: [{name:  'Sony'}, {name: 'Apple'}, {name: 'LG'}, {name: 'Motorola'}]},
      {id: '4529', name: 'Katerine', email: 'tailor@yahoo.com',
        products: []}
    ];
    return Observable.of(customers).delay(1000);
  }
}
