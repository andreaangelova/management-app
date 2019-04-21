import {ProductState} from '../modules/product/product-data/product.reducer';
import {CustomerState} from '../modules/customer/customer-data/customer.reducer';

export interface AppStore {
  products: ProductState;
  customers: CustomerState;
}
