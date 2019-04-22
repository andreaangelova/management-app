import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'customers', loadChildren: './features/customer/customer.module#CustomerModule'},
  {path: 'products', loadChildren: './features/product/product.module#ProductModule'},
  {path: '**', redirectTo: '/customers'} // PageNotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
