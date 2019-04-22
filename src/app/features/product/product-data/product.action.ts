import {Action} from '@ngrx/store';

export enum ProductActionTypes {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
}
export  class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}
export  class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}
export  class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload: any) {}
}

export type All =
  | LoadProducts
  | LoadProductsSuccess
  | DeleteProduct;
