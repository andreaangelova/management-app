import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CustomerComponent, CustomerTableComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
