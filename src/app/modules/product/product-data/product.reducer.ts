import {ProductModel} from './Product.model';
import {All, ProductActionTypes} from './product.action';

const initialState: ProductState = {};

export interface ProductState {
  loading?: boolean;
  products?: ProductModel[];
}

export function ProductReducer(state = initialState, action: All): ProductState {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return state;
    default :
      return state;
  }
}
