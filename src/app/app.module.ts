import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './modules/main/sidenav/sidenav.component';
import { DashboardsComponent } from './modules/main/dashboards/dashboards.component';


// ANGULAR MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatOptionModule } from '@angular/material/core';
import {  MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpAddEditComponent } from './components/emp-add-edit/emp-add-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule } from '@angular/material/divider';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StockEmpAddEditComponent } from './components/stock-emp-add-edit/stock-emp-add-edit.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { MainComponent } from './modules/main/main.component';
import { StockComponent } from './modules/main/stock/stock.component';
import { StoresComponent } from './modules/main/stores/stores.component';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmDialogComponent } from './components/confirmDialog/confirm-dialog.component';
import { DatePipe } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RegisterComponent } from './modules/register/register.component';

@NgModule({
  declarations: [
    AppComponent,

    SidenavComponent,

    CardComponent,
    EmpAddEditComponent,
    DashboardsComponent,
    LoginComponent,
    AlertComponent,
    ConfirmDialogComponent,

    StoresComponent,
    StockComponent,
    StockEmpAddEditComponent,
    StockCardComponent,
    MainComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
