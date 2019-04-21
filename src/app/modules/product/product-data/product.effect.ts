import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as ProductAction from './product.action';
import {catchError, map, mergeMap} from 'rxjs/operators';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions) {}

  @Effect({dispatch: false})
  LoadProducts: Observable<any> = this.actions$.pipe(
    ofType(ProductAction.ProductActionTypes.LOAD_PRODUCTS)
  );
}
