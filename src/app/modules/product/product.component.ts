import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../core/AppSotre.model';
import {LoadProducts} from './product-data/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.select(res => res.products).subscribe(res => {
      if (res.loading) {
        // TODO: add spinner here
      } else if (!res.products) {
        this.store.dispatch(new LoadProducts());
      }
    });
  }

}
