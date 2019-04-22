import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {StoreModule} from '@ngrx/store';
import {reducers, effects} from './index';
import {EffectsModule} from '@ngrx/effects';
import {CustomerSerivce} from '../modules/customer/customer-data/customer.service';
import {ProductSerivce} from '../modules/product/product-data/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [CustomerSerivce, ProductSerivce],
  exports: [MenuComponent]
})
export class CoreModule { }
