import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product-data/Product.model';
import {Store} from '@ngrx/store';
import {AppStore} from '../../../core/AppSotre.model';
import {DeleteProduct} from '../product-data/product.action';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: ProductModel[];

  constructor(private store: Store<AppStore>) {
    this.store.select(res => res.products).subscribe(res => this.products = res.products);
  }

  ngOnInit() {
  }

  deleteProduct(productId) {
    this.store.dispatch(new DeleteProduct(productId));
  }
}
