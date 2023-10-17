import { Injector, NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { AccountNumberRenderComponent } from '../main/accounts/accounts-home/account-number-render/account-number-render.component';
import { CustomertypeColumnRendererComponent } from '../main/customers/customers-home/customertype-column-renderer/customertype-column-renderer.component';
import { MovementColumnRendererComponent } from '../main/accounts/accounts-detail/movement-column-renderer/movement-column-renderer.component';
import { MENU_COMPONENTS } from './app.menu.config';



export function intRateMonthlyFunction (rowData: Array<any>): number {
  return rowData["INTERESRATE"]/12;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent,
    MovementColumnRendererComponent,
    ...MENU_COMPONENTS
  ],
  exports: [
    CommonModule,
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent,
    MovementColumnRendererComponent,
    ...MENU_COMPONENTS
  ],
  entryComponents: [...MENU_COMPONENTS],
  
})
export class SharedModule { }