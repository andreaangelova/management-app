import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [SpinnerComponent, InfoDialogComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [SpinnerComponent, InfoDialogComponent],
  entryComponents: [InfoDialogComponent]
})
export class SharedModule { }
