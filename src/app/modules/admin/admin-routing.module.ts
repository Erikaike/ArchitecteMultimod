import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SmartComponentComponent } from './components/feature/smart-component/smart-component.component';
import { DumbComponentComponent } from './components/ui/dumb-component/dumb-component.component';

const routes: Routes = [
  // Le routing renverra les routes en rapport avec le dossier "pages"
  { path: 'home', component: HomeComponent},
  // { path: 'smc', component: SmartComponentComponent},
  // { path: 'dumb', component: DumbComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
