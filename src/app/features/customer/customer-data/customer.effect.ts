import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as CustomerAction from './customer.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {CustomerSerivce} from './customer.service';


@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private customerService: CustomerSerivce) {}

  @Effect()
  LoadCustomers: Observable<Action> = this.actions$.pipe(
    ofType(CustomerAction.CustomerActionTypes.LOAD_CUSTOMERS),
    mergeMap(action => this.customerService.getCustomers().pipe(
        map(customer => (new CustomerAction.LoadCustomersSuccess(customer)))
      )
    )
  );

  @Effect()
  AddCustomer: Observable<Action> = this.actions$.pipe(
    ofType(CustomerAction.CustomerActionTypes.ADD_CUSTOMER),
    mergeMap(() => Observable.of(new CustomerAction.RemoveSuccessMessage())) // after showing the success message, remove it
  );
}
