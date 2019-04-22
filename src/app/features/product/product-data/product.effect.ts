import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as ProductAction from './product.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {ProductSerivce} from './product.service';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductSerivce) {}

  @Effect()
  LoadProducts: Observable<Action> = this.actions$.pipe(
    ofType(ProductAction.ProductActionTypes.LOAD_PRODUCTS),
    mergeMap(action => this.productService.getProducts().pipe(
      map(products => (new ProductAction.LoadProductsSuccess(products)))
      )
    )
  );

  @Effect({dispatch: false})
  DeleteProduct: Observable<Action> = this.actions$.pipe(
    ofType(ProductAction.ProductActionTypes.DELETE_PRODUCT),
    tap(res => console.log(res))
  );
}
