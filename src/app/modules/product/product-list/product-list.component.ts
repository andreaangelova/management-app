import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {id: '3423', name: 'Samsung', price: 743.99},
    {id: '1396', name: 'Apple', price: 1000},
    {id: '1396', name: 'Huawei', price: 672.234},
    {id: '1396', name: 'Nokia', price: 10},
    {id: '1678', name: 'Sony', price: 456.755555},
    {id: '1678', name: 'LG', price: 322},
    {id: '1678', name: 'Motorola', price: 456.345}
  ];

  constructor() { }

  ngOnInit() {
  }

}
