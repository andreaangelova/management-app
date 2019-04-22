import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-new-dialog',
  templateUrl: './customer-new-dialog.component.html',
  styleUrls: ['./customer-new-dialog.component.css']
})
export class CustomerNewDialogComponent implements OnInit {

  customerForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      name: new FormControl([], Validators.required),
      email: new FormControl([], [Validators.required, Validators.email])
    });
  }

  validateData() {
    if (this.customerForm.valid) {
      this.dialogRef.close(this.customerForm.value);
    } else { // show the error messages
      this.customerForm.controls['name'].markAsTouched();
      this.customerForm.controls['email'].markAsTouched();
    }
  }

}
