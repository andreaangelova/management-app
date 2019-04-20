import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [
    {id: '3423', name: 'Tailor', email: 'tailor@yahoo.com',
      products: [{name: 'Samsung'}, {name: 'Apple'}]},
    {id: '1396', name: 'Simon', email: 'simon@hotmail.com',
    products: [{name: 'Huawei'}, {name: 'Samsung'}, {name: 'Nokia'}]},
    {id: '1678', name: 'Filip', email: 'tailor@gmail.com',
      products: [{name:  'Sony'}, {name: 'Apple'}, {name: 'LG'}, {name: 'Motorola'}]},
    {id: '4529', name: 'Katerine', email: 'tailor@yahoo.com',
    products: []}
  ];

  constructor() { }

  ngOnInit() {
  }

}
