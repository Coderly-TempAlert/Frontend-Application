import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardsComponent } from './modules/main/dashboards/dashboards.component';

import { MainComponent } from './modules/main/main.component';
import { StoresComponent } from './modules/main/stores/stores.component';
import { StockComponent } from './modules/main/stock/stock.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginGuard } from './core/guards/login/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  {
    path: 'main',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'dashboards', component: DashboardsComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'stores/:id/stocks', component: StockComponent },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '/main/stores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
