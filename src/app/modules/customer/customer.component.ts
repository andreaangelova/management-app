import { Component, OnInit } from '@angular/core';
import {AppStore} from '../../core/AppSotre.model';
import {Store} from '@ngrx/store';
import {CustomerModel} from './customer-data/Customer.model';
import {LoadCustomers} from './customer-data/customer.action';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.select(res => res.customers).subscribe(res => {
      if (res.customers && !res.loading) { // if there aren't any customers in the store, load them
        this.customers = res.customers;
      } else if (!res.loading) {
        this.store.dispatch(new LoadCustomers());
      } else {
        // TODO: add spinner here
      }
    });
  }

}
