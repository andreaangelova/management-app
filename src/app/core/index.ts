import {ActionReducerMap} from '@ngrx/store';
import {AppStore} from './AppSotre.model';
import {ProductReducer} from '../features/product/product-data/product.reducer';
import {CustomerReducer} from '../features/customer/customer-data/customer.reducer';
import {ProductEffects} from '../features/product/product-data/product.effect';
import {CustomerEffects} from '../features/customer/customer-data/customer.effect';
import {Action} from '@ngrx/store';

export const reducers: ActionReducerMap<AppStore, Action> = {
  products: ProductReducer,
  customers: CustomerReducer
};

export const effects = [CustomerEffects, ProductEffects];
