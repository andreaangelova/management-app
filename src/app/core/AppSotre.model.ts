import {ProductState} from '../features/product/product-data/product.reducer';
import {CustomerState} from '../features/customer/customer-data/customer.reducer';

export interface AppStore {
  products: ProductState;
  customers: CustomerState;
}
