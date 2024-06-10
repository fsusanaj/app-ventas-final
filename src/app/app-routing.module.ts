import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { SalesComponent } from './components/sales/sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'producto', component: ListProductComponent },
  { path: 'venta', component: SalesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClientesComponent },
  { path: 'proveedor', component: ProveedorComponent },

  { path: '**', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
