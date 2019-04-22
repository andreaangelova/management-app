import { Component, OnInit } from '@angular/core';
import {AppStore} from '../../core/AppSotre.model';
import {Store} from '@ngrx/store';
import {CustomerModel} from './customer-data/Customer.model';
import {AddCustomer, LoadCustomers} from './customer-data/customer.action';
import {CustomerNewDialogComponent} from './customer-new-dialog/customer-new-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private store: Store<AppStore>, private dialog: MatDialog) { }

  ngOnInit() {
    this.store.select(res => res.customers).subscribe(res => {
      if (res.customers && !res.loading) { // if there aren't any customers in the store, load them
        this.customers = res.customers;
      } else if (!res.loading) {
        this.store.dispatch(new LoadCustomers());
      }
    });
  }

  addNewCustomerDialog() {
    const dialog = this.dialog.open(CustomerNewDialogComponent);
    dialog.afterClosed().subscribe(res => {
      if (res) { // if the user has added a valid customer
        this.store.dispatch(new AddCustomer(res));
      }
    });
  }

}
