import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SmartComponentComponent } from './components/feature/smart-component/smart-component.component';
import { DumbComponentComponent } from './components/ui/dumb-component/dumb-component.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  // { path: 'smc', component: SmartComponentComponent},
  // { path: 'dumb', component: DumbComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
