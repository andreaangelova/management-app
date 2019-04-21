import {Action} from '@ngrx/store';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = 'LOAD_CUSTOMERS',
  LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS',
  UPDATE_CUSTOMERS = 'UPDATE_CUSTOMERS',
  ADD_CUSTOMER = 'ADD_CUSTOMER'
}

export  class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}
export  class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: any) {}
}
export  class UpdateCustomers implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMERS;
  constructor(public payload: any) {}
}
export  class AddCustomer implements Action {
  readonly type = CustomerActionTypes.ADD_CUSTOMER;
  constructor(public payload: any) {}
}

export type All =
  | LoadCustomers
  | LoadCustomersSuccess
  | UpdateCustomers
  | AddCustomer;
