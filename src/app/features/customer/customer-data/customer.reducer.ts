import {CustomerModel} from './Customer.model';
import {All, CustomerActionTypes} from './customer.action';

const initialState: CustomerState = {};

export interface CustomerState {
  loading?: boolean;
  customers?: CustomerModel[];
  showSuccess?: boolean;
}

export function CustomerReducer(state = initialState, action: All): CustomerState {
  switch (action.type) {
    case CustomerActionTypes.LOAD_CUSTOMERS:
      return {...state, loading: true};
    case CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:
      return {customers: action.payload, loading: false};
    case CustomerActionTypes.ADD_CUSTOMER:
        action.payload['id'] = Math.floor(1000 + Math.random() * 9000); // generating random it
        // TODO: check if the generated id already exists in another customer
      return {customers: [action.payload, ...state.customers], showSuccess: true, loading: false};
    case CustomerActionTypes.REMOVE_SUCCESS_MESSAGE:
      return {...state, showSuccess: false};
    default :
      return state;
  }
}
