import {ProductModel} from '../../product/product-data/Product.model';

export class CustomerModel {
  id: string;
  name: string;
  email: string;
  products: ProductModel[];

  constructor(
    id: string,
    name: string,
    email: string,
    products: ProductModel[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.products = products;
  }
}
