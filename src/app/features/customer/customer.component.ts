import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppStore} from '../../core/AppSotre.model';
import {Store} from '@ngrx/store';
import {CustomerModel} from './customer-data/Customer.model';
import {AddCustomer, LoadCustomers} from './customer-data/customer.action';
import {CustomerNewDialogComponent} from './customer-new-dialog/customer-new-dialog.component';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../../shared/info-dialog/info-dialog.component';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  customers: CustomerModel[];
  subscription: ISubscription;

  constructor(private store: Store<AppStore>, private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.store.select(res => res.customers).subscribe(res => {
      if (res.customers && !res.loading) { // if there aren't any customers in the store, load them
        this.customers = res.customers;
      } else if (!res.loading) {
        this.store.dispatch(new LoadCustomers());
      }
      if (res.showSuccess) { this.showSuccessDialog(); }
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

  showSuccessDialog() {
    const config = {
      data: {
        header: 'Success!',
        body: 'You added a new customer.',
        buttons: [{name: 'OK', value: 'ok'}, {name: 'Try again?', value: 'again'}]
      }};
    const dialog = this.dialog.open(InfoDialogComponent, config);
    dialog.afterClosed().subscribe(res => {if (res === 'again') {this.addNewCustomerDialog(); }});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
