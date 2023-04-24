import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoresComponent } from './modules/dashboards/stores/stores.component';
import { StockComponent } from './modules/dashboards/stock/stock.component';
import { SidenavComponent } from './modules/dashboards/sidenav/sidenav.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';

// ANGULAR MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoresComponent,
    StockComponent,
    SidenavComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
