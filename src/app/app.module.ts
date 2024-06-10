import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalesComponent } from './components/sales/sales.component';
import { ProductService } from './services/product.service';
import { SalesService } from './services/sales.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbComponent } from './components/navb/navb.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
@NgModule({
  declarations: [AppComponent, ListProductComponent, SalesComponent, DashboardComponent, NavbComponent, LoginComponent, ClientesComponent, ProveedorComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ProductService, SalesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
