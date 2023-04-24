import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { StoresComponent } from './modules/dashboards/stores/stores.component';
import { StockComponent } from './modules/dashboards/stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboards',
    component: DashboardsComponent
  },
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: 'stocks',
    component: StockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
