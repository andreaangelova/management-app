import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../core/AppSotre.model';
import {LoadProducts} from './product-data/product.action';
import {ProductModel} from './product-data/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.select(res => res.products).subscribe(res => {
      if (!res.products && !res.loading) {
        this.store.dispatch(new LoadProducts());
      } else {
        this.products = res.products;
      }
    });
  }

}
