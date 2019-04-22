import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductSerivce {

  constructor() {}

  getProducts() {
    const products = [
      {id: '3423', name: 'Samsung', price: 743.99},
      {id: '1396', name: 'Apple', price: 1000},
      {id: '1120', name: 'Huawei', price: 672.234},
      {id: '1763', name: 'Nokia', price: 10},
      {id: '1427', name: 'Sony', price: 456.755555},
      {id: '1445', name: 'LG', price: 322},
      {id: '1059', name: 'Motorola', price: 456.345}
    ];
    return Observable.of(products).delay(1000);
  }
}
