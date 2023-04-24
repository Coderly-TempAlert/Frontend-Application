import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoresComponent } from './modules/dashboards/stores/stores.component';
import { StockComponent } from './modules/dashboards/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoresComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
