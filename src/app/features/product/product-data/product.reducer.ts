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
      return {...state, loading: true};
    case ProductActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {products: action.payload, loading: false};
    case ProductActionTypes.DELETE_PRODUCT:
      return {...state, products: state.products.filter(res => res.id !== action.payload)};
    default :
      return state;
  }
}
