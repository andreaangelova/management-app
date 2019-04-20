import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  @Input() customers;

  constructor() { }

  ngOnInit() {
  }

}
