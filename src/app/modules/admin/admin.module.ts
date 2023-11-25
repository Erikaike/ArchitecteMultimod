import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SmartComponentComponent } from './components/feature/smart-component/smart-component.component';
import { DumbComponentComponent } from './components/ui/dumb-component/dumb-component.component';


@NgModule({
  declarations: [
    HomeComponent,
    SmartComponentComponent,
    DumbComponentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
