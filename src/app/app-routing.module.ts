import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardsComponent } from './modules/main/dashboards/dashboards.component';

import { MainComponent } from './modules/main/main.component';
import { StoresComponent } from './modules/main/stores/stores.component';
import { StockComponent } from './modules/main/stock/stock.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/main/dashboards', pathMatch: 'full' },
  {
    path: 'main',
    // canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'dashboards', component: DashboardsComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'stores/:id/stocks', component: StockComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
