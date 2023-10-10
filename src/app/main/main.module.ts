import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
  
    OntimizeWebModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
