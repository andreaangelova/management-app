import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SharedModule } from '../../shared/shared.module';
import {CustomerNewDialogComponent} from './customer-new-dialog/customer-new-dialog.component';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, CustomerTableComponent, CustomerNewDialogComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [CustomerNewDialogComponent]
})
export class CustomerModule { }
