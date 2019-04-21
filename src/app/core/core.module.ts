import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {StoreModule} from '@ngrx/store';
import {reducers, effects} from './index';
import {EffectsModule} from '@ngrx/effects';
import {CustomerSerivce} from '../modules/customer/customer-data/customer.service';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [CustomerSerivce],
  exports: [MenuComponent]
})
export class CoreModule { }
