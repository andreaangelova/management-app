import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Store} from '@ngrx/store';
import {AppStore} from '../../core/AppSotre.model';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private store: Store<AppStore>) {
    this.store.subscribe(data => { // showing the spinner every time there is loading in the store
      let loading = false;
      for (const key in data) {
        if (data[key].loading) {
          loading = true;
        }
      }
      loading ? this.spinner.show() : this.spinner.hide();
    });
  }

  ngOnInit() {
  }

}
