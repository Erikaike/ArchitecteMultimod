import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
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
    AccountRoutingModule
  ]
})
export class AccountModule { }
