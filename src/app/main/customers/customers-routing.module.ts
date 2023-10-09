import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';

const routes: Routes = [
  {path : 'customer/home',
  component: CustomersHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
